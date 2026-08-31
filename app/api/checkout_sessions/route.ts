import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { CartItem } from '@/types';
import { FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING_FEE } from '@/lib/store/cart-store';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, customerEmail, customerName } = body as {
      items: CartItem[];
      customerEmail?: string;
      customerName?: string;
    };

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Calculate subtotal
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    // Shipping in EUR
    const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
    const shippingCost = isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;

    // Line items for Stripe
    const lineItems: any[] = items.map((item) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.product.name,
          description: item.selectedSize
            ? `Option: ${item.selectedSize}`
            : item.product.shortDescription || 'Professional car detailing product',
          images: item.product.images?.length
            ? [item.product.images[0]]
            : undefined,
        },
        unit_amount: Math.round(item.product.price * 100),
      },
      quantity: item.quantity,
    }));

    // Add shipping as line item if applicable
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Malta Island-Wide Delivery (Standard 24-48h)',
            description: 'Fast delivery across Malta & Gozo',
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      });
    }

    // Check if real Stripe key is provided
    const isLiveStripe =
      process.env.STRIPE_SECRET_KEY &&
      !process.env.STRIPE_SECRET_KEY.includes('mock') &&
      process.env.STRIPE_SECRET_KEY.startsWith('sk_');

    if (isLiveStripe) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        customer_email: customerEmail || undefined,
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cart`,
        shipping_address_collection: {
          allowed_countries: ['MT', 'IT', 'DE', 'FR', 'GB', 'ES'],
        },
        metadata: {
          subtotal: subtotal.toString(),
          itemCount: items.length.toString(),
          customerName: customerName || '',
        },
      });

      return NextResponse.json({ url: session.url, sessionId: session.id });
    } else {
      // Mock checkout flow for testing without live Stripe API keys
      const mockSessionId = `mock_cs_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      return NextResponse.json({
        url: `${origin}/checkout/success?session_id=${mockSessionId}&mock=true`,
        sessionId: mockSessionId,
      });
    }
  } catch (error: any) {
    console.error('Stripe checkout session error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error creating checkout session' },
      { status: 500 }
    );
  }
}
