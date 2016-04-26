module.exports = {
    accessKeyId: process.env.AWSKEYID,
    secretAccessKey: process.env.AWSSECRETKEY,
    region: 'us-east-1',
    handler: 'index.handler',
    role: 'arn:aws:iam::662068354453:role/lambda_exec_role',
    functionName: 'some-lambda-function',
    timeout: 300,
    description: 'gulp testing',
    memorySize: 256,
    publish: true,
    runtime: 'nodejs4.3',
    vpc: {
        SecurityGroupIds: ['sg-f46b538c'],
        SubnetIds: ['subnet-1b9adf6d', 'subnet-c5f96b9d', 'subnet-069adf70', 'subnet-fcf96ba4']
    }
}