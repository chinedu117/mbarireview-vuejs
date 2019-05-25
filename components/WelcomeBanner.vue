
 <template>
    <div class="welcome-banner" :style=" $store.state.common.skin.nightMode ? 'background-color:#29272d' : 'background-color:#f9f9f9' ">
           
           <div class="welcome-content">
               <logo style="width: 300px; height: 300px; margin-left: 20px"/>
               <div class="welcome-message">
                    <h3>Mbari Reviews</h3>
                   <div> Remembering and Celebrating<br>
                         Who we are, our origin and our values.
                   </div>
               </div>
               
           </div>
       </div>
 </template>
 <script>
 import Logo from '~/components/Logo.vue'

export default {
  name: 'welcome-banner',
   data() {
      return {

      }
   },
   computed: {
        
   },
   components : { Logo },
   methods: {

   }
}
</script>

<style>

.welcome-banner {
   display: flex;
   justify-content: center;
   width: 100%;
   height: 200px;
   position: relative;
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.41'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
   background-repeat: repeat;
 
}


.welcome-content {
   margin:auto;
   display: flex;
}

.welcome-message {
   flex: 1;
 
}

.welcome-message h3 {
    font-size: 36px;
    font-weight: 700;
}

.welcome-message div {
    font-size: 24px;
   
}

@media (min-width: 900px) {
 .welcome-banner {
   width: 100%;
   height: 70vh;

}
}
 </style>
