<template>
    <div class="flex flex-col justify-center items-center min-h-screen bg-gray-200">
        
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your password</label>
                </div>
                <div class="flex items-center justify-between">
  <div class="flex items-start">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" 
             class="w-4 h-4 z-10 border border-gray-300 rounded bg-gray-50 
                    focus:ring-3 focus:ring-blue-300 
                    dark:bg-gray-700 dark:border-gray-600 
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800"
             required>
    </div>
    <div class="ml-3 text-sm">
      <label for="remember" class="text-gray-500 dark:text-gray-300">
        Remember me
      </label>
    </div>
  </div>
  <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
    Forgot password?
  </a>
                </div>
                <button type="submit" class="w-full text-black bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                               Don’t have an account yet?
                                <router-link
                                  to="/signup"
                                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign up
                 </router-link>
                </p>  
            </form>                
          </div>
        </div>
    </div>
</template>

<script setup>
</script>