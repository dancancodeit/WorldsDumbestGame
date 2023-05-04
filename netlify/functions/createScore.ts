import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { PrismaClient } from '@prisma/client'

type Score = {
  playerName: string,
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
  const {playerName, score} = JSON.parse(event.body) as Score

  async function main() {
    await prisma.score.create({
      data: {
        player_name: playerName,
        score: score
      }
    })
  }

  try { 
    await main()
    return {
      statusCode: 200,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ succes: true }),
    };
  }
  catch (e) { 
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ e }),
    };
  }
};

export { handler };