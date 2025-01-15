#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkTsStack } from '../lib/cdk-ts-stack';

const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION;

const app = new cdk.App();
new CdkTsStack(app, 'CdkTsStack', {
  env: { account, region },
  description: "Stack for a simple CDK hello-world app ts",
});


// Añadir etiquetas a la pila
cdk.Tags.of(app).add("Environment", "Development");
cdk.Tags.of(app).add("Source", "aws-cdk-hello-world");
cdk.Tags.of(app).add("Owner", "Jhonatan");