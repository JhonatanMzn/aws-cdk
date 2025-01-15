#!/usr/bin/env python3
import os

import aws_cdk as cdk

from stacks.cdk_stack import CdkHelloWorldStack


app = cdk.App()
hello_world_stack = CdkHelloWorldStack(app, "CdkHelloWorldStack",
    env={
        "account": os.getenv("CDK_DEFAULT_ACCOUNT"),
        "region": os.getenv("CDK_DEFAULT_REGION"),
    },
    description="Stack for a simple CDK hello-world app",
)

cdk.Tags.of(hello_world_stack).add("Environment", "Development")
cdk.Tags.of(hello_world_stack).add("Source", "aws-cdk-hello-world")
cdk.Tags.of(hello_world_stack).add("Owner", "Jhonatan")

app.synth()
