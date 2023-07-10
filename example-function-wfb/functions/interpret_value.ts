import { DefineFunction, Schema } from "deno-slack-sdk/mod.ts";
import { SlackFunction } from "deno-slack-sdk/mod.ts";

export const InterpretValueFunction = DefineFunction({
  callback_id: "interpret_value_function",
  source_file: "functions/interpret_value.ts",
  title: "Interpret Value",
  input_parameters: {
    properties: {
      input_string: {
        type: Schema.types.string,
      },
    },
    required: ["input_string"],
  },
  output_parameters: {
    properties: {
      result: {
        type: Schema.types.string,
      },
    },
    required: ["result"],
  },
});

export default SlackFunction(
  InterpretValueFunction,
  ({ inputs }) => {
    console.log("Slack function called");
    const input_string = inputs.input_string;

    console.log("Slack function called");
    console.log(input_string);
    switch (input_string) {
      case "Arbitrage":
        return {
          outputs: {
            input_string,
            result: "ARBITRAGE",
          },
        };
      case "Filed Optimisation":
        return {
          outputs: {
            input_string,
            result: "FIELD OPTIMISATION",
          },
        };
      default:
        return {
          outputs: {
            input_string,
            result: "WRONG CATEGORY",
          },
        };
    }
  },
);
