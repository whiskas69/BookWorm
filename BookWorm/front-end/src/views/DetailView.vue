<template>
  <div class="px-20 py-20">
    <div class="grid grid-cols-2 gap-4">
      <div class="grid w-full h-full place-items-center">
        <img
          alt="ecommerce"
          class="grid w-[350px] h-[502] bg-cover rounded-3xl"
          :src="book.bookimg"
        />
      </div>
      <div class="mt-10">
        <h1 class="text-gray-900 text-[36px] title-font font-bold mb-1">
          {{ book.bookname }}
        </h1>
        <div class="flex flex-row">
          <p class="text-[20px] font-medium mr-2">BY</p>
          <p class="text-[20px] font-normal text-navy">{{ book.writer }}</p>
        </div>
        <div class="flex flex-row mt-1">
          <p class="text-[20px] font-medium mr-2">Publisher</p>
          <p class="text-[20px] font-normal text-navy">{{ book.writer }}</p>
        </div>
        <div class="flex flex-row mt-1">
          <p class="text-[20px] font-medium mr-2">Category</p>
          <p class="text-[20px] font-normal text-navy">{{ book.cate }}</p>
        </div>

        <div class="flex">
          <router-link
            class="text-black bg-yellow font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            :to="`/shelf`"
            v-model="selectbook"
            @click="myshelf"
            >Free
            
          </router-link>
        </div>

        <div class="flex flex-row mt-5 w-[360px]">
          <p class="text-[20px] font-normal mr-2 text-gray-400">File Type</p>
          <p class="text-[20px] font-normal text-black text-right ml-20">PDF</p>
        </div>
        <div class="flex flex-row mt-1 w-[360px]">
          <p class="text-[20px] font-normal mr-2 text-gray-400">Length</p>
          <p class="text-[20px] font-normal ml-24 text-black">{{ book.lenght }} page</p>
        </div>
      </div>
    </div>
    <hr class="mt-10" />
    <div class="py-5 px-2">
      <h2 class="text-[24px] font-medium">Synopsis</h2>
      <div class="py-5">
        <p>
          {{ book.text }}
        </p>
      </div>
    </div>
    <hr class="mt-10" />
    <div class="mx-auto px-4 py-5">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-[24px] font-medium">Comment</h2>
      </div>
      <form class="mb-6">
        <div
          class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        >
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows="6"
            v-model="commentInput"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          >
          </textarea>
        </div>
        <button
          type="submit"
           @click="comment"
          class="inline-flex items-center py-3 px-4 text-xs font-medium text-center text-white bg-steelblue rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
      <hr class="mt-10">
      <div class="py-5">
        <label class="text-[24px] font-medium">ALL REVIEW</label>
      <div>
        
      </div>
        <div class="py-5">
           <BoxComment />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      book: [],
      bookimg: "",
      bookname: "",
      cate: "",
      text: "",
      writer: "",
      commentInput: "",
      selectbook: []
    };
  },
  mounted() {
    this.getbookdetail(this.$route.params.id);
    console.log(this.$route.params.id)
  },
  methods: {
    getbookdetail(id) {
      const bookid = this.$route.params.id;
      console.log("bookid", bookid)
      
      axios.get(`http://54.159.109.208:3000/book/${bookid}`)
      .then((response) => {
        console.log("res", response.data.data)
        this.book = response.data.data
        
      })
      .catch((error) => {
        this.error = error.response.data.message;
      });
    },
    
    comment() {
      
      let userId = localStorage.getItem('userId');
      let username = localStorage.getItem('username')
      
      const data ={
        text : this.commentInput,
        bookname : this.book.bookname,
        username: username,
        userID: userId
      }
      console.log("commentInput", data)
      
      axios.post("http://54.159.109.208:3000/createcomment", data)
      .then(res => {
        console.log('In commentbox')
        this.responseData = res.data;
        
        this.commentInput = ""
        console.log("wine", this.responseData)
        
        this.fetchComments()
      })
      .catch(err => {
        console.error('error fetching data: ', err)
      })
    },
    myshelf(){
      console.log("in myshelf")
      
      let userId = localStorage.getItem('userId');
      let username = localStorage.getItem('username')
      
      const data = {
        id : this.book.id,
        bookname : this.book.bookname,
        writer : this.book.writer,
        cate : this.book.cate,
        img : this.book.bookimg,
        userId : userId,
        username : username
      }
      
      console.log("data shelf", data)
      
      axios.post("http://54.159.109.208:3000/createshelf", data)
      .then(res => {
        console.log('In shlef')
        this.responseData = res.data;
        
        console.log("wine", this.responseData)
        
        
      })
      .catch(err => {
        console.error('error fetching data: ', err)
      })
    }
    
  }
  

};
</script>


<script setup>
import BoxComment from "../components/BoxComment.vue";
</script>

<style></style>
