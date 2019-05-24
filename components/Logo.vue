<template>
<svg :class="$vuetify.breakpoint.mdAndUp ? 'logo-size-large' : 'logo-size-small'" id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 613.191 716.312">

<path :fill=" nightMode ? '#E6E7E8' : '#FFFFF' " d="M539.699,500.501c-8.839,68.281,129.248,221.875-236.95,215.625c-211.112-3.604-301.573,18.75-236.95-215.625
  c31.726-115.066,4.308-273.958,236.95-215.626C397.921,308.738,567.207,288,539.699,500.501z"/>

<path :fill=" nightMode ? '#FFFFF' : '#E6E7E8'" d="M373.453,618.21c1.868,92.291-30.323,89.584-67.729,89.584c-37.405,0-70.879-0.905-67.729-89.584
  c2.827-79.585,30.324-89.584,67.729-89.584C343.13,528.626,371.878,540.389,373.453,618.21z"/>

<path  :fill=" nightMode ? '#E6E7E8' : '#FFFFF' " stroke="#FFFFFF" stroke-miterlimit="10" d="M579.708,239.228c-87.502-90.57-75.535-259.63-276.043-236.593
  C158.874,19.27,108.221,129.864,27.624,239.228c-106.25,144.176,123.588,236.594,276.042,236.594
  C450.969,475.821,703.136,366.985,579.708,239.228z"/>

</svg>
</template>
<script>  
export default {
  name: 'logo',

computed: {
    
    nightMode(){
       return this.$store.state.common.skin.nightMode
    }
},
methods:{
  gotoHome(){
    this.$router.push({path: "/"})
  }
}
}
</script>

<style type="text/css">
  .logo-size-large {
    width: 200px;
    height: 80px;
    padding-right: 5px;
  }

  .logo-size-small {
    width: 100px;
    height: 50px;
    padding-right: 5px;
  }
  
  
</style>
