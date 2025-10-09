import axios from 'axios';

export default class FigmaApi {
  constructor(token) {
    this.baseUrl = 'https://api.figma.com';
    this.token = token;
  }

  async getLocalVariables(fileKey) {
    const resp = await axios.request({
      url: `${this.baseUrl}/v1/files/${fileKey}/variables/local`,
      headers: {
        Accept: '*/*',
        'X-Figma-Token': this.token,
      },
    });

    return resp.data;
  }

  async postVariables(fileKey, payload) {
    const resp = await axios.request({
      url: `${this.baseUrl}/v1/files/${fileKey}/variables`,
      method: 'POST',
      headers: {
        Accept: '*/*',
        'X-Figma-Token': this.token,
      },
      data: payload,
    });

    return resp.data;
  }
}
