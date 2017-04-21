<style>
.aside-open {
  transition: transform 0.3s;
}
.aside-open.has-push-right {
  transform: translateX(-300px);
}
.aside {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1049;
    overflow: auto;
    background: #fff;
    border-left: 1px solid lightgrey;
}
.aside.right {
  left: auto;
  right: 0;
}
.slideright-enter {
  animation:slideright-in .3s;
}
.slideright-leave {
  animation:slideright-out .3s;
}
@keyframes slideright-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideright-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.aside:focus {
    outline: 0
}
@media (max-width: 991px) {
  .aside {
    min-width:240px
  }
}
.aside.right {
  right: 0;
  left: auto
}
.aside .aside-dialog .aside-header {
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.43px;
  padding: 6px 15px;
  background: #337ab7;
  color: #fff
}
.aside .aside-dialog .aside-header .close {
  margin-right: -8px;
  padding: 4px 8px;
  color: #fff;
  font-size: 25px;
  opacity: .8
}
.aside .aside-dialog .aside-body {
  position: relative;
  padding: 15px
}
.aside .aside-dialog .aside-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5
}
.aside .aside-dialog .aside-footer .btn+.btn {
  margin-left: 5px;
  margin-bottom: 0
}
.aside .aside-dialog .aside-footer .btn-group .btn+.btn {
  margin-left: -1px
}
.aside .aside-dialog .aside-footer .btn-block+.btn-block {
  margin-left: 0
}
.aside::-webkit-scrollbar { width: 0 !important }
</style>

<template>
  <div class="aside right"
    v-bind:style="{width:width + 'px'}"
    v-show="show"
    transition="slideright">
    <div class="aside-dialog">
      <div class="aside-content">
        <div class="aside-header" v-show="header">
          <button type="button" class="close" @click='show = false'><span>&times;</span></button>
          <h4 class="aside-title">
          <slot name="header">
            {{ header }}
          </slot>
          </h4>
        </div>
        <div class="aside-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show', 'header', 'width'],
  watch: {
    show (val) {
      if(val) {
        const body = document.body
        const scrollBarWidth = getScrollBarWidth()

        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px'
        }
      }
    }
  }
}

function getScrollBarWidth() {
  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight)
    return 0

  let inner = document.createElement('p')
  inner.style.width = '100%'
  inner.style.height = '200px'

  let outer = document.createElement('div')
  outer.style.position = 'absolute'
  outer.style.top = '0px'
  outer.style.left = '0px'
  outer.style.visibility = 'hidden'
  outer.style.width = '200px'
  outer.style.height = '150px'
  outer.style.overflow = 'hidden'
  outer.appendChild(inner)

  document.body.appendChild(outer)
  let w1 = inner.offsetWidth
  outer.style.overflow = 'scroll'
  let w2 = inner.offsetWidth
  if (w1 === w2) w2 = outer.clientWidth

  document.body.removeChild(outer)

  return (w1 - w2)
}
</script>
