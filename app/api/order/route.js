const { NextResponse } = require('next/server');
import axios from 'axios';

async function POST(request) {
    const order = await request.json();
    
  try {
    
    const bearerToken = process.env.BEARER_TOKEN;
    const merchantId = process.env.CLIENT_MID;
    const options = {
      method: 'POST',
      url: 'https://www.clover.com/invoicingcheckoutservice/v1/checkouts',
      headers: {
        accept: 'application/json',
        'X-Clover-Merchant-Id': merchantId,
        'content-type': 'application/json',
        authorization: `Bearer ${bearerToken}`
      },
      data: order
    };

    const response = await axios.request(options);
    
    const { href } = response.data; // Extract the href from the response object

    // Return the href to the client
    return NextResponse.json({ href, message: 'Checkout created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create checkout' }, { status: 500 });
  }
}

export { POST };
