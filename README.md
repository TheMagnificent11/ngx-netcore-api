# NgxNetcoreApi

Angular module for HTTP communication with ASP.Net Core Web API

## Build Status
[![Build status](https://saji.visualstudio.com/Open%20Source/_apis/build/status/NgxNetCoreApi)](https://saji.visualstudio.com/Open%20Source/_build/latest?definitionId=28)

## Usage

1. Import `ngx-netcore-api` into your application's module.
2. Import `ApiService` as a dependency into your Angular component or provider
3. Use the generic `get<T>`/`post<T>`/`put<T>`/`delete<T>` methods to execute call to API endpoints
4. Use the `BadRequestHelper.getErrorMessage` static method to convert `ValidationProblemDetails` bad request error responses received from the API into error messages.
