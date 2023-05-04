import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { PrismaClient } from '@prisma/client'

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const prisma = new PrismaClient()

  async function main() {
    const scores = await prisma.score.findMany();
    await prisma.$disconnect();
    return scores;
  }

  try { 
    const scores = await main() 
    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({ scores }),
    };
  }
  catch (e) { 
    return {
      statusCode: 500,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({ message: e }),
    };
  }
};

export { handler };