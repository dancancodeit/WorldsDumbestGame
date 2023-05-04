import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { PrismaClient } from '@prisma/client'

type Score = {
  name: string,
  score: number
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (!event.body) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "missing body" }),
    };
  }
  
  const prisma = new PrismaClient()
  const {name, score} = JSON.parse(event.body) as Score

  async function main() {
    await prisma.score.create({
      data: {
        player_name: name,
        score: score
      }
    })
    await prisma.$disconnect();
  }

  try { 
    await main()
    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({ succes: true }),
    };
  }
  catch (e) { 
    console.error(e);
    return {
      statusCode: 500,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({ e }),
    };
  }
};

export { handler };