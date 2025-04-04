<template>
  <fwb-sidebar>
    <fwb-sidebar-item>
        <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <span class="material-icons">dashboard</span>
          <span class="ml-2">Dashboard</span>
        </li>
    </fwb-sidebar-item>
    <fwb-sidebar-item>
        <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <span class="material-icons">inbox</span>
          <span class="ml-2">Inbox</span>
        </li>
    </fwb-sidebar-item>
    <fwb-sidebar-dropdown-item>
        <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
        @click="toggleTeam"
        >
          <span class="material-icons">group</span>
          <span class="ml-2">Team</span>          
        </li>

        <!-- Sub-items (will show if "isTeamOpen" is true) -->
      <div v-if="isTeamOpen">
        <fwb-sidebar-item class="pl-16">
          <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
            <span class="material-icons">admin_panel_settings</span>
            <span class="ml-2">Admin</span>
          </li>
        </fwb-sidebar-item>

        <fwb-sidebar-item class="pl-16">
          <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
            <span class="material-icons">people</span>
            <span class="ml-2">Members</span>
          </li>
        </fwb-sidebar-item>

        <fwb-sidebar-item class="pl-16">
          <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
            <span class="material-icons">public</span>
            <span class="ml-2">Public</span>
          </li>
        </fwb-sidebar-item>
      </div>        
    </fwb-sidebar-dropdown-item>
    <fwb-sidebar-item>
      <router-link to="/signin" class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
    <span class="material-icons">login</span>
    <span class="ml-2">Sign In</span>
  </router-link>
    </fwb-sidebar-item>
    <fwb-sidebar-item>
  <router-link to="/signup" class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
    <span class="material-icons">person_add</span>
    <span class="ml-2">Sign Up</span>
  </router-link>
    </fwb-sidebar-item>

    <fwb-sidebar-item>
        <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <span class="material-icons">logout</span>
          <span class="ml-2">Log Out</span>
        </li>
    </fwb-sidebar-item>
    <fwb-sidebar-item-group border>
        <fwb-sidebar-item>
        <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <span class="material-icons">local_fire_department</span>
          <span class="ml-2">Upgrade to Pro</span>
        </li>
        </fwb-sidebar-item> 
        <fwb-sidebar-item>
        <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <span class="material-icons">library_books</span>
          <span class="ml-2">Documentation</span>
        </li>
        </fwb-sidebar-item> 
        
        <fwb-sidebar-item>
        <li class="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
          <span class="material-icons">help</span>
          <span class="ml-2">Help</span>
        </li>
        </fwb-sidebar-item>
    </fwb-sidebar-item-group>
  </fwb-sidebar>
</template>

<script setup>
      import { ref } from 'vue';
      import { FwbSidebar, FwbSidebarItemGroup, FwbSidebarItem } from 'flowbite-vue'
      // Reactive state to control dropdown visibility
const isTeamOpen = ref(false);

// Toggle function for the "Team" dropdown
function toggleTeam() {
  isTeamOpen.value = !isTeamOpen.value;
}
</script>