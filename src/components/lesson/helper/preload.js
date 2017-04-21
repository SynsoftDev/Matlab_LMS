import config from '../../../config'

// this function preloads and caches images
// its currently used when users hover over links to allow the browser
// 100-300 ms time to preload the image
//
// seems to reduce flicker fairly ok though its messed up for mobile so
// images are fetched twice and we rely on the browser cache which should
// make everything fairly efficient

let cache = {}
export default function preloadImg(url) {
  if(!config.preload) {
    return
  }

  if(!(url in cache)) {
    let img = new Image()
    img.src = url
    cache[url] = true
  }
}
