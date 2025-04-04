<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <div class="flex-1 p-4 bg-gray-100">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// Importing Sidebar directly in <script setup>
import Sidebar from "./components/Sidebar.vue";
</script>
