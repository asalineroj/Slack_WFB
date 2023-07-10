import { Manifest } from "deno-slack-sdk/mod.ts";

//adding created function to manifest
import { InterpretValueFunction } from "./functions/interpret_value.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
//Add imported function into functions Manifest export
export default Manifest({
  name: "example-function-wfb",
  description: "A blank template for building Slack apps with Deno",
  icon: "assets/default_new_app_icon.png",
  functions: [InterpretValueFunction],
  workflows: [],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
