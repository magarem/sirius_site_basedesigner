<template>
  <footer class="w-full bg-gray-800 text-gray-300">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        <div class="space-y-6">
          <div class="h-10 w-40 bg-gray-700 rounded">LOGO</div>
          <div class="space-y-3">
            <div class="h-3 w-full bg-gray-700 rounded"></div>
            <div class="h-3 w-full bg-gray-700 rounded"></div>
            <div class="h-3 w-2/3 bg-gray-700 rounded"></div>
          </div>
          <div class="flex gap-4">
            <div v-for="i in 3" :key="i" class="h-8 w-8 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="h-5 w-24 bg-gray-600 rounded"></div> <div class="space-y-4">
            <div v-for="i in 4" :key="i" class="h-3 w-32 bg-gray-700 rounded"></div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="h-5 w-24 bg-gray-600 rounded"></div> <div class="space-y-4">
            <div class="flex items-center gap-3">
               <div class="h-5 w-5 bg-gray-700 rounded-full"></div>
               <div class="h-3 w-40 bg-gray-700 rounded"></div>
            </div>
            <div class="flex items-center gap-3">
               <div class="h-5 w-5 bg-gray-700 rounded-full"></div>
               <div class="h-3 w-40 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>

        <div class="space-y-6 p-6 bg-gray-700/50 rounded-3xl border border-gray-600">
          <div class="h-5 w-32 bg-gray-600 rounded"></div>
          <div class="h-3 w-full bg-gray-600 rounded"></div>
          <div class="h-12 w-full bg-gray-800 rounded-xl border border-gray-600"></div>
          <div class="h-12 w-full bg-orange-800 rounded-xl"></div>
        </div>

      </div>

      <div class="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="h-3 w-48 bg-gray-700 rounded"></div>
        <div class="h-3 w-32 bg-gray-700 rounded"></div>
      </div>

    </div>
  </footer>
</template>