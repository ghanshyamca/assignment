import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/search')
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  it('/ (GET) with query', () => {
    return request(app.getHttpServer())
      .get('/search?text="the king"&sortby=name&orderby=desc&skip=2&limit=2')
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  it('/ (GET) with query', () => {
    return request(app.getHttpServer())
      .get("/search?text='the king'&sortby=name&orderby=desc&skip=2&limit=2")
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  it('/ (GET) with query check memo', () => {
    return request(app.getHttpServer())
      .get("/search?text='the king'&sortby=name&orderby=desc&skip=2&limit=2")
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  it('/ (GET) with query check dateLastEdited', () => {
    return request(app.getHttpServer())
      .get(
        "/search?text='the king'&sortby=dateLastEdited&orderby=desc&skip=2&limit=2",
      )
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  it('/ (GET) with query check ascending', () => {
    return request(app.getHttpServer())
      .get("/search?text='the king'&sortby=name&skip=1")
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  it('/ (GET) with query check dateLastEdited ascending', () => {
    return request(app.getHttpServer())
      .get("/search?text='the king'&sortby=dateLastEdited&skip=2&limit=2")
      .expect(200)
      .then((result) => {
        expect(result.statusCode).toEqual(200);
      });
  });

  it('/ (GET) with query check xyz ascending', () => {
    return request(app.getHttpServer())
      .get("/search?text='the king'&sortby=xyz&skip=2&limit=2")
      .expect(500)
      .then((result) => {
        expect(result.statusCode).toEqual(500);
      });
  });

  it('/ (GET) with query check xyz descending', () => {
    return request(app.getHttpServer())
      .get("/search?text='the king'&sortby=xyz&orderby=desc&skip=2&limit=2")
      .expect(500)
      .then((result) => {
        expect(result.statusCode).toEqual(500);
      });
  });
});
