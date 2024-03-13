<template>
  <div  v-for="(comment, index) in comments" :key="index">
    <article class="p-6 mb-10 text-base bg-white border-solid border-2 border-black-600 rounded-lg dark:bg-gray-900">
      <div class="flex flex-row">
        <img
            class="mr-2 w-6 h-6 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Michael Gough"
          />
        <div class="flex items-center"  >
          <p
            class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"
          >
            {{comment.username}}
          </p>
          <!---- <p class="text-sm text-gray-600 dark:text-gray-400">
            <time pubdate datetime="2022-02-08" title="February 8th, 2022"
              >{{comment.bookname}}</time
            >
          </p>-->
        </div>
      </div>
      
      <div>
        {{comment.text}}
      </div>
  
  </article>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      comments: []
      
    }
  },
  created(){
    this.fetchComments();
  },
  
  
  
  methods: {
    async fetchComments() {
      console.log("getAllComment");
      try {
        const res = await axios.get("http://54.159.109.208:3000/comment");
        this.comments = res.data.data;
        console.log("allcom", res.data);
        console.log("allcom01", res.data.data);
      } catch (err) {
        console.error('error fetching data: ', err);
      }
    }
  }
  
  
  
};
</script>

<style></style>
