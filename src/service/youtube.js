class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const json = await (
      await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        this.getRequestOptions
      )
    ).json();
    return json.items;
  }

  async search(query) {
    const json = await (
      await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.key}`,
        this.getRequestOptions
      )
    ).json();
    return json.items;
  }
}

export default Youtube;
