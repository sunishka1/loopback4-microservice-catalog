import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get,
  response,
  ResponseObject,
} from '@loopback/rest';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

const twoHundred = 200;
/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(
    @inject(RestBindings.Http.REQUEST) private readonly req: Request,
  ) {}

  // Map to `GET /ping`
  @get('/ping')
  @response(twoHundred, PING_RESPONSE)
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }
}