import { Injectable } from '@nestjs/common';
import * as data from '../mock_data.json';
import * as func from './utils';

@Injectable()
export class AppService {
  fetch(text, sortby, orderby, skip, limit): result {
    let search = [];
    const key = text && Array.isArray(text) ? text.join(',') : text;

    if (func.memo[key]) {
      search = func.memo[text];
    } else {
      search = func.search(text, data);
      func.memo[key] = search;
    }

    search = func.sort(sortby, orderby, search);

    if (skip && limit) {
      search = func.skip(search, skip);
      search = func.limit(search, limit);
    }
    return { result: search, count: search.length };
  }
}
