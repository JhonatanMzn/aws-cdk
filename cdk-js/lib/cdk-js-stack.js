const { Stack, Duration, CfnOutput  } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const lambda = require('aws-cdk-lib/aws-lambda');

class CdkJsStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Define the Lambda function resource
    const myFunction = new lambda.Function(this, "HelloWorldFunction", {
      functionName: "MyHelloWorldFunction-cdk-js",
      runtime: lambda.Runtime.NODEJS_20_X, // Provide any supported Node.js runtime
      handler: "index.handler",
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          return {
            statusCode: 200,
            body: JSON.stringify('Hello World con js y cdk!'),
          };
        };
      `),
    });

    // Define the Lambda function URL resource
    const myFunctionUrl = myFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    // Define a CloudFormation output for your URL
    new CfnOutput(this, "myFunctionUrlOutput", {
      value: myFunctionUrl.url,
    })

  }
}

module.exports = { CdkJsStack }