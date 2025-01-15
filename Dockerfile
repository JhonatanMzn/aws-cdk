# Usa la imagen base de Python
FROM python:3.9.21-alpine3.20

# Establece un directorio de trabajo
WORKDIR /app

# Instala Node.js, npm y bash
RUN apk add --update nodejs npm

# Instala AWS CDK globalmente
RUN npm install -g aws-cdk

# Instala AWS CLI utilizando pip
RUN pip install awscli

# Verifica las instalaciones
RUN python3 --version && pip --version && node --version && npm --version && aws --version && cdk --version

# Comando por defecto: mantener el contenedor activo
CMD ["tail", "-f", "/dev/null"]

