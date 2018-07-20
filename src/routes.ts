/* tslint:disable */
import { Controller, ValidateParam, FieldErrors, ValidateError, TsoaRoute } from 'tsoa';
import { AnalyticDataController } from './controllers/analytic_data';
import { AuthenticationController } from './controllers/authentication';
import { ItemController } from './controllers/item';
import { SpecialController } from './controllers/special';
import { expressAuthentication } from './utils/authentication';

const models: TsoaRoute.Models = {
  "AnalyticDataDb": {
    "properties": {
      "event": { "dataType": "string", "required": true },
      "unique_value": { "dataType": "string", "required": true },
      "id": { "dataType": "double", "required": true },
    },
  },
  "StandardResponseAnalyticDataDb": {
    "properties": {
      "data": { "ref": "AnalyticDataDb", "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "AnalyticDataNoIdDb": {
    "properties": {
      "event": { "dataType": "string", "required": true },
      "unique_value": { "dataType": "string", "required": true },
    },
  },
  "StandardResponseAnalyticDataDb[]": {
    "properties": {
      "data": { "dataType": "array", "array": { "ref": "AnalyticDataDb" }, "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "LoginResApi": {
    "properties": {
      "username": { "dataType": "string", "required": true },
      "sessionId": { "dataType": "string", "required": true },
    },
  },
  "StandardResponseLoginResApi": {
    "properties": {
      "data": { "ref": "LoginResApi", "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "LoginReqApi": {
    "properties": {
      "username": { "dataType": "string", "required": true },
      "password": { "dataType": "string", "required": true },
    },
  },
  "LogoutResApi": {
    "properties": {
      "success": { "dataType": "boolean", "required": true },
    },
  },
  "StandardResponseLogoutResApi": {
    "properties": {
      "data": { "ref": "LogoutResApi", "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "ItemCategory": {
    "properties": {
      "id": { "dataType": "double", "required": true },
      "name": { "dataType": "string", "required": true },
      "parent_id": { "dataType": "double", "required": true },
      "created_at": { "dataType": "datetime", "required": true },
    },
  },
  "StandardResponseItemCategory[]": {
    "properties": {
      "data": { "dataType": "array", "array": { "ref": "ItemCategory" }, "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "StandardResponseItemCategory": {
    "properties": {
      "data": { "ref": "ItemCategory", "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "Item": {
    "properties": {
      "id": { "dataType": "double", "required": true },
      "name": { "dataType": "string", "required": true },
      "short_description": { "dataType": "string", "required": true },
      "long_description": { "dataType": "string", "required": true },
      "image_url": { "dataType": "string", "required": true },
      "category_id": { "dataType": "double", "required": true },
      "created_at": { "dataType": "datetime", "required": true },
    },
  },
  "StandardResponseItem[]": {
    "properties": {
      "data": { "dataType": "array", "array": { "ref": "Item" }, "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "StandardResponseItem": {
    "properties": {
      "data": { "ref": "Item", "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "ItemSize": {
    "properties": {
      "id": { "dataType": "double", "required": true },
      "itemId": { "dataType": "double", "required": true },
      "sku": { "dataType": "string" },
      "name": { "dataType": "string", "required": true },
      "short_description": { "dataType": "string" },
      "long_description": { "dataType": "string" },
      "image_url": { "dataType": "string", "required": true },
      "priceInDollars": { "dataType": "double", "required": true },
      "quantity": { "dataType": "double", "required": true },
      "kj": { "dataType": "double", "required": true },
    },
  },
  "StandardResponseItemSize[]": {
    "properties": {
      "data": { "dataType": "array", "array": { "ref": "ItemSize" }, "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
  "SpecialType": {
    "enums": ["fixed", "percent"],
  },
  "PriceType": {
    "enums": ["fixed", "percent"],
  },
  "Special": {
    "properties": {
      "id": { "dataType": "double", "required": true },
      "name": { "dataType": "string", "required": true },
      "image_url": { "dataType": "string", "required": true },
      "description": { "dataType": "string", "required": true },
      "highlight": { "dataType": "boolean", "required": true },
      "type": { "ref": "SpecialType", "required": true },
      "priceType": { "ref": "PriceType", "required": true },
      "price": { "dataType": "double", "required": true },
      "meta": { "dataType": "any" },
    },
  },
  "StandardResponseSpecial[]": {
    "properties": {
      "data": { "dataType": "array", "array": { "ref": "Special" }, "required": true },
      "meta": { "dataType": "any", "required": true },
    },
  },
};

export function RegisterRoutes(app: any) {
  app.post('/v1/analytic_data/data',
    function(request: any, response: any, next: any) {
      const args = {
        body: { "in": "body", "name": "body", "required": true, "ref": "AnalyticDataNoIdDb" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new AnalyticDataController();


      const promise = controller.Data.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/analytic_data/data',
    function(request: any, response: any, next: any) {
      const args = {
        limit: { "in": "query", "name": "limit", "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new AnalyticDataController();


      const promise = controller.Categories.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.post('/v1/authentication/login',
    function(request: any, response: any, next: any) {
      const args = {
        body: { "in": "body", "name": "body", "required": true, "ref": "LoginReqApi" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new AuthenticationController();


      const promise = controller.Login.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/authentication/valid_session',
    authenticateMiddleware([{ "name": "fusion_ordering_session" }]),
    function(request: any, response: any, next: any) {
      const args = {
        request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new AuthenticationController();


      const promise = controller.ValidSession.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.post('/v1/authentication/logout',
    function(request: any, response: any, next: any) {
      const args = {
        request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new AuthenticationController();


      const promise = controller.Logout.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/item/categories',
    function(request: any, response: any, next: any) {
      const args = {
        limit: { "in": "query", "name": "limit", "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemController();


      const promise = controller.Categories.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/item/category/:id',
    function(request: any, response: any, next: any) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemController();


      const promise = controller.CategoryById.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/item/items',
    function(request: any, response: any, next: any) {
      const args = {
        limit: { "in": "query", "name": "limit", "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemController();


      const promise = controller.Items.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/item/item/:id',
    function(request: any, response: any, next: any) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemController();


      const promise = controller.ItemById.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/item/in_category/:id',
    function(request: any, response: any, next: any) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemController();


      const promise = controller.ItemsByCategory.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/item/sizes',
    function(request: any, response: any, next: any) {
      const args = {
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemController();


      const promise = controller.ItemSizes.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/item/sizes/:id',
    function(request: any, response: any, next: any) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new ItemController();


      const promise = controller.ItemSizesByItem.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });
  app.get('/v1/item/specials',
    function(request: any, response: any, next: any) {
      const args = {
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new SpecialController();


      const promise = controller.Specials.apply(controller, validatedArgs);
      promiseHandler(controller, promise, response, next);
    });

  function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
    return (request: any, response: any, next: any) => {
      let responded = 0;
      let success = false;
      for (const secMethod of security) {
        expressAuthentication(request, secMethod.name, secMethod.scopes).then((user: any) => {
          // only need to respond once
          if (!success) {
            success = true;
            responded++;
            request['user'] = user;
            next();
          }
        })
          .catch((error: any) => {
            responded++;
            if (responded == security.length && !success) {
              response.status(401);
              next(error)
            }
          })
      }
    }
  }

  function isController(object: any): object is Controller {
    return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
  }

  function promiseHandler(controllerObj: any, promise: any, response: any, next: any) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode;
        if (isController(controllerObj)) {
          const headers = controllerObj.getHeaders();
          Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
          });

          statusCode = controllerObj.getStatus();
        }

        if (data || data === false) { // === false allows boolean result
          response.status(statusCode || 200).json(data);
        } else {
          response.status(statusCode || 204).end();
        }
      })
      .catch((error: any) => next(error));
  }

  function getValidatedArgs(args: any, request: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return ValidateParam(args[key], request.query[name], models, name, fieldErrors);
        case 'path':
          return ValidateParam(args[key], request.params[name], models, name, fieldErrors);
        case 'header':
          return ValidateParam(args[key], request.header(name), models, name, fieldErrors);
        case 'body':
          return ValidateParam(args[key], request.body, models, name, fieldErrors, name + '.');
        case 'body-prop':
          return ValidateParam(args[key], request.body[name], models, name, fieldErrors, 'body.');
      }
    });
    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, '');
    }
    return values;
  }
}
