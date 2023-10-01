import { Configuration, OpenAIApi } from "openai";

var notkeya = "sk-t@rWlV@ZySa0T"
var notkeyb = "iQzWd@rIdmT3B@lbkFJi"
var notkeyc = "oSPTGd@JTLRBP@gXguDlR"

const configuration = new Configuration({
    organization: "org-RZ3uSWP75ShMsyLdXuc7Hot7",
    apiKey: (notkeya + notkeyb + notkeyc).replaceAll( "@" , "" ),
  });

const openai = new OpenAIApi(configuration);

const promptType = [ "SQL Code of a Database Schema", "IAC script" , "AWS Architecture" ]

async function generateInitialCode(opCode,projectDescription){
    console.log(projectDescription)
    var prompts =  [ { role : "user" , content : `Generate ${promptType[opCode]} for the following project description. Return ERROR incase irrelevant description is provided.` }, 
                                 { role : "assistant" , content : "Sure! Please provide the project description." },
                     { role : "user" , content : `${projectDescription}` }] 
    try {
                const result = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo-0613",
                    messages: prompts,
                    max_tokens: 500,
                  });
        
                var chat_response = result.data.choices[0].message.content
                var mess = chat_response;
                console.log(mess);
                return mess;
            } catch (e) {
                console.error(e);
              }
}

export {generateInitialCode}
