
import asking from './index'

export function testApi() {
  return asking({
    url: "/hint/info/list",
    method: "get"
  });
}


export function testBtnApi(data) {
  return asking({
    url: "/api/business/record",
    method: "get",
    params: data
  });
}