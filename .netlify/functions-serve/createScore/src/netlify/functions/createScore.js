var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/createScore.ts
var createScore_exports = {};
__export(createScore_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(createScore_exports);
var import_client = require("@prisma/client");
var handler = async (event, context) => {
  if (!event.body) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "missing body" })
    };
  }
  const prisma = new import_client.PrismaClient();
  const { playerName, score } = JSON.parse(event.body);
  async function main() {
    await prisma.score.create({
      data: {
        player_name: playerName,
        score
      }
    });
  }
  try {
    await main();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ succes: true })
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ e })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=createScore.js.map
