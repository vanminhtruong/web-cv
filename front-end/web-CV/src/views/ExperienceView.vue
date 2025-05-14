<script setup>
import { useThemeStore } from '../stores/theme'
import { useI18n } from 'vue-i18n'

const themeStore = useThemeStore()
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-indigo-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Experience section -->
      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white inline-block pb-2 border-b-4 border-indigo-500 transform transition-all duration-300 hover:scale-105">{{ t('experience.title').toUpperCase() }}</h2>
        </div>
        
        <div class="relative">
          <!-- Timeline bar -->
          <div class="absolute left-0 md:left-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-indigo-200 transform md:translate-x-[-50%] rounded-full"></div>
          
          <!-- Timeline items -->
          <div class="space-y-12">
            <!-- Experience 1 -->
            <div class="relative flex flex-col md:flex-row items-start md:justify-between group pt-14 md:pt-0">
              <!-- Ngày tháng mobile (chỉ hiển thị trên mobile) -->
              <div class="block md:hidden w-full mb-8 px-4 absolute top-0 left-0 right-0 z-20">
                <div class="text-indigo-800 dark:text-indigo-300 font-medium text-sm uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-lg shadow-sm inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  02/10/2024 - 01/01/2025
                </div>
              </div>
              <div class="flex-1 md:w-[45%] md:pr-8 md:text-right order-2 md:order-1 transition-all duration-300 transform hover:-translate-y-1 mt-6 md:mt-0">
                <div class="bg-white dark:bg-gray-800 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
                  <div class="flex flex-col">
                    <span class="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">{{ t('experience.date1') }}</span>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ t('experience.company1') }}</h3>
                    <p class="text-indigo-600 dark:text-indigo-400 font-medium mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {{ t('experience.position1') }}
                    </p>
                  </div>
                  <div class="pl-2 border-l-2 border-indigo-100 dark:border-indigo-700">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {{ t('experience.department1') }}
                    </h4>
                    <ul class="list-none text-gray-600 space-y-2">
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">Contributed to the development of an e-commerce system (details in the Team Project section).</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">{{ t('experience.responsibility1') }}</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">Collaborated with the backend team to integrate APIs and implement functionalities for user, product, and notification management.</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">{{ t('experience.responsibility2') }}</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">{{ t('experience.responsibility3') }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div  class="translate-x-[360px] absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-[80px] md:top-auto md:mt-28 order-1 md:order-2 ml-6 md:ml-0 z-10">
                <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-12 w-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="absolute w-24 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent top-1/2 left-full transform -translate-y-1/2 hidden md:block"></div>
              </div>
              
              <div class="md:w-[45%] md:pl-8 md:text-left order-3 mt-6 md:mt-0">
                <div class="translate-y-[5px] text-indigo-800 dark:text-indigo-300 font-medium text-sm uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-lg shadow-sm mt-16 md:mt-28 inline-flex items-center hidden md:inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  02/10/2024 - 01/01/2025
                </div>
              </div>
            </div>
            
            <!-- Experience 2 -->
            <div class="relative flex flex-col md:flex-row items-start md:justify-between group pt-14 md:pt-0">
              <!-- Ngày tháng mobile (chỉ hiển thị trên mobile) -->
              <div class="block md:hidden w-full mb-8 px-4 absolute top-0 left-0 right-0 z-20">
                <div class="text-indigo-800 dark:text-indigo-300 font-medium text-sm uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-lg shadow-sm inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  26/02/2024 - 10/04/2024
                </div>
              </div>
              <div class="translate-y-5 md:w-[45%] md:pr-8 md:text-right order-2 md:order-1">
                <div class="text-indigo-800 dark:text-indigo-300 font-medium text-sm uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-lg shadow-sm mt-16 md:mt-28 hidden md:inline-flex items-center ml-auto relative z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  26/02/2024 - 10/04/2024
                </div>
              </div>
              
              <div class="translate-x-[360px] translate-y-4 absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-[80px] md:top-auto md:mt-28 order-1 md:order-2 ml-6 md:ml-0 z-10">
                <div  class="bg-gradient-to-r from-purple-600 to-indigo-500 h-12 w-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div class="absolute w-24 h-px bg-gradient-to-l from-transparent via-indigo-300 to-transparent top-1/2 right-full transform -translate-y-1/2 hidden md:block"></div>
              </div>
              
              <div class="flex-1 md:w-[45%] md:pl-8 order-3 transition-all duration-300 transform hover:-translate-y-1 mt-4">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-r-4 border-purple-500">
                  <div class="flex flex-col">
                    <span class="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-3">Full-stack Web Developer</span>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Nacentcomm Technology Joint Stock Company</h3>
                    <p class="text-purple-600 font-medium mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Full-stack Web Developer
                    </p>
                  </div>
                  <div class="pr-2 border-r-2 border-purple-100">
                    <h4 class="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-end">
                      Back End Development
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </h4>
                    <ul class="list-none text-gray-600 space-y-2">
                      <li class="flex items-start justify-end">
                        <span class="dark:text-gray-300">Developed a library management system as a personal project.</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </li>
                      <li class="flex items-start justify-end">
                        <span class="dark:text-gray-300">Implementation of Controller, Model for a website using the MVC architectural pattern.</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </li>
                      <li class="flex items-start justify-end">
                        <span class="dark:text-gray-300">RESTful API (Application Programming Interfaces), Eloquent ORM(Object-Relational Mapping), MVC.</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </li>
                      <li class="flex items-start justify-end">
                        <span class="dark:text-gray-300">Technologies used: Laravel.</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Team Projects section -->
      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white inline-block pb-2 border-b-4 border-indigo-500 transform transition-all duration-300 hover:scale-105">TEAM PROJECT</h2>
        </div>
        
        <!-- Project 1: C-to-C E-commerce Website -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div class="p-8 relative">
            <div class="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-bl-lg font-semibold text-sm uppercase tracking-wider shadow-md">
              Featured Project
            </div>
            <div class="flex flex-col lg:flex-row justify-between items-start mb-8 mt-8">
              <div class="flex items-center">
                <div class="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">C-to-C E-commerce Website</h3>
              </div>
              <div class="flex items-center text-indigo-700 dark:text-indigo-300 font-medium mt-4 lg:mt-0 bg-indigo-50 dark:bg-indigo-900/50 px-4 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                01/03/2024 - 01/01/2025
              </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Name of customer</h4>
                <p class="text-gray-700 dark:text-gray-300">Worked on projects for corporate clients based in Korea.</p>
              </div>
              
              <div class="lg:col-span-2">
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Description project</h4>
                <p class="text-gray-700 dark:text-gray-300">Developed a feature-rich e-commerce platform with Super Admin controls (user/shop/product/category/promotion/banner management) and Web user features (auth, shopping, orders, reviews, seller tools, chat, notifications, and marketing).</p>
              </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 mt-6">
              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Team Size</h4>
                </div>
                <div class="ml-11">
                  <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">8</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Collaborative development team</p>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">My Role</h4>
                </div>
                <div class="ml-11">
                  <div class="text-indigo-600 dark:text-indigo-400 font-bold">Front End Developer</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Vue.js specialist focusing on user experience</p>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Technology Stack</h4>
                </div>
                <div class="ml-11 space-y-2">
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded mr-2">Front End</span>
                    <span class="text-gray-700 dark:text-gray-300">Vue.js, Next.js</span>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded mr-2">Back End</span>
                    <span class="text-gray-700 dark:text-gray-300">Spring Boot</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 mt-6">
              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Team Size</h4>
                </div>
                <div class="ml-11">
                  <div class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">8</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Collaborative development team</p>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">My Role</h4>
                </div>
                <div class="ml-11">
                  <div class="text-indigo-600 dark:text-indigo-400 font-bold">Frontend Developer</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Vue.js specialist focusing on user experience</p>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Technology Stack</h4>
                </div>
                <div class="ml-11 space-y-2">
                  <div class="flex items-center">
                    <a href="https://team03-admin.cyvietnam.id.vn" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Admin Dashboard
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="https://team03.cyvietnam.id.vn" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      User Website
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="https://github.com/vanminhtruong/Team03-cy/tree/main/Team03-Admin" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Admin Repository
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="https://github.com/vanminhtruong/Team03-cy/tree/main/Team03-Web" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      User Repository
                    </a>
                  </div>
                  <div class="flex items-center mt-3">
                    <span class="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded mr-2">Front End</span>
                    <span class="text-gray-700 dark:text-gray-300">Vue.js, Next.js</span>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded mr-2">Back End</span>
                    <span class="text-gray-700 dark:text-gray-300">Spring Boot</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 mt-8">
              <div class="flex items-center mb-4">
                <div class="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Key Responsibilities</h4>
              </div>
              <div class="ml-11">
                <div class="mb-4">
                  <div class="flex items-center mb-2">
                    <span class="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded mr-2">Super Admin</span>
                  </div>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="dark:text-gray-300">Developed authentication features, including login and logout functionality</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="dark:text-gray-300">Implemented product approval system, enabling review, approval, and rejection of new products</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div class="flex items-center mb-2">
                    <span class="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded mr-2">User Features</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">Built functionality to add, edit, delete user addresses and set default addresses</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">Integrated VNPay for seamless online payment during checkout</span>
                      </li>
                    </ul>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">Developed features for order management, including order tracking and cancellation</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="dark:text-gray-300">Implemented delivery status management, allowing users and shop admins to track and update order statuses</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Project 2: Library Management Website -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div class="p-8 relative">
            <div class="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-bl-lg font-semibold text-sm uppercase tracking-wider shadow-md">
              Solo Project
            </div>
            <div class="flex flex-col lg:flex-row justify-between items-start mb-8 mt-8">
              <div class="flex items-center">
                <div class="h-10 w-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Library Management Website</h3>
              </div>
              <div class="flex items-center text-purple-700 dark:text-purple-300 font-medium mt-4 lg:mt-0 bg-purple-50 dark:bg-purple-900/50 px-4 py-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                1/1/2024 - 5/3/2024
              </div>
            </div>
            
            <div class="mb-8">
              <div class="flex items-center mb-3">
                <div class="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Description</h4>
              </div>
              <div class="ml-11 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>Developed a comprehensive Library Management System with dual interfaces (Admin & User). Admin website features authentication system, books/categories management, borrowing tracking, fine management, user control, and multilingual support. User interface includes account management, book browsing/searching, borrowing management, dark/light mode theming, and responsive design.</p>
              </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Team Size</h4>
                </div>
                <div class="ml-11">
                  <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">1</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Personal project development</p>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">My Role</h4>
                </div>
                <div class="ml-11">
                  <div class="text-purple-600 dark:text-purple-400 font-bold">Full Stack Developer</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">End-to-end implementation of all features</p>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Technology Stack</h4>
                </div>
                <div class="ml-11 space-y-2">
                  <div class="flex items-center">
                    <a href="https://github.com/vanminhtruong/libary.git" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub Repository
                    </a>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded mr-2">Front End</span>
                    <span class="text-gray-700 dark:text-gray-300">Vue.js, React.js</span>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 rounded mr-2">Back End</span>
                    <span class="text-gray-700 dark:text-gray-300">Laravel</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600">
              <div class="flex items-center mb-4">
                <div class="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Key Responsibilities</h4>
              </div>
              <div class="ml-11">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="dark:text-gray-300">Led full-stack development from initial design to deployment</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="dark:text-gray-300">Implemented secure authentication and role-based access control</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="dark:text-gray-300">Developed comprehensive book management system with CRUD operations</span>
                    </li>
                  </ul>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="dark:text-gray-300">Built borrowing tracking system and fine management features</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="dark:text-gray-300">Created responsive UI/UX design with Vue.js and React.js frontends</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="dark:text-gray-300">Designed and implemented RESTful APIs with Laravel backend</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
