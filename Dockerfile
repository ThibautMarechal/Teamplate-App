#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["App/App.csproj", "App/"]
COPY ["Repository/Repository.csproj", "Repository/"]
RUN dotnet restore "App/App.csproj"
COPY . .
WORKDIR "/src/App"
RUN dotnet build "App.csproj" -c Release -o /app/build

FROM node:14 as clientBuild
WORKDIR /src
COPY ["App/ClientApp/", "."]
RUN npm install
RUN npm run build

FROM build AS publish
CMD "ls"
RUN dotnet publish "App.csproj" -c Release -o /app/publish
COPY --from=clientBuild /src/build /app/publish/ClientApp/build

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 80
ENTRYPOINT ["dotnet", "App.dll"]