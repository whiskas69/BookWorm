<template>
  <div class="w-full mt-20 flex items-center justify-center">
    <div class="bg-white rounded-xl z-10 w-[1000px]">
      <div class="text-center">
        <h2 class="mt-5 text-3xl font-bold text-gray-900">Novel Upload</h2>
      </div>
      <form class="mt-8 space-y-3" action="#" method="POST">
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide"
            >อัปโหลดหน้าปก</label
          >
          <div class="flex items-center justify-center w-full">
            <label
              class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
            >
              <div
                class="h-full w-full text-center flex flex-col items-center justify-center items-center"
              >
                <p class="pointer-none text-gray-500">
                  <span class="text-sm">Drag and drop</span> files here <br />
                  or
                  <a href="" id="" class="text-blue-600 hover:underline"
                    >select a file</a
                  >
                  from your computer
                </p>
              </div>
              <input type="file" class="hidden" />
            </label>
          </div>
        </div>

        <!-- title -->
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide"
            >ชื่อเรื่อง</label
          >
          <input
            class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type=""
            placeholder=""
          />
        </div>

        <!-- title -->
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide"
            >คำโปรย</label
          >
          <textarea
            class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type=""
            placeholder=""
          />
        </div>

        <!-- dropdown -->
        <Listbox as="div" v-model="selected">
          <ListboxLabel
            class="block text-sm font-medium leading-6 text-gray-900"
            >Assigned to</ListboxLabel
          >
          <div class="relative mt-2">
            <ListboxButton
              class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              <span class="flex items-center">
                <img
                  :src="selected.avatar"
                  alt=""
                  class="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span class="ml-3 block truncate">{{ selected.name }}</span>
              </span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
              >
                <!-- <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> -->
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="person in people"
                  :key="person.id"
                  :value="person"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    ]"
                  >
                    <div class="flex items-center">
                      <img
                        :src="person.avatar"
                        alt=""
                        class="h-5 w-5 flex-shrink-0 rounded-full"
                      />
                      <span
                        :class="[
                          selected ? 'font-semibold' : 'font-normal',
                          'ml-3 block truncate',
                        ]"
                        >{{ person.name }}</span
                      >
                    </div>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <!-- dropdown -->
        <Listbox as="div" v-model="selected">
          <ListboxLabel
            class="block text-sm font-medium leading-6 text-gray-900"
            >Assigned to</ListboxLabel
          >
          <div class="relative mt-2">
            <ListboxButton
              class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              <span class="flex items-center">
                <img
                  :src="selected.avatar"
                  alt=""
                  class="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span class="ml-3 block truncate">{{ selected.name }}</span>
              </span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
              >
                <!-- <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> -->
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="person in people"
                  :key="person.id"
                  :value="person"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    ]"
                  >
                    <div class="flex items-center">
                      <img
                        :src="person.avatar"
                        alt=""
                        class="h-5 w-5 flex-shrink-0 rounded-full"
                      />
                      <span
                        :class="[
                          selected ? 'font-semibold' : 'font-normal',
                          'ml-3 block truncate',
                        ]"
                        >{{ person.name }}</span
                      >
                    </div>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <!-- file -->
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide"
            >อัปโหลดนิยาย</label
          >
          <div class="flex items-center justify-center w-full">
            <label
              class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
            >
              <div
                class="h-full w-full text-center flex flex-col items-center justify-center items-center"
              >
                <p class="pointer-none text-gray-500">
                  <span class="text-sm">Drag and drop</span> files here <br />
                  or
                  <a href="" id="" class="text-blue-600 hover:underline"
                    >select a file</a
                  >
                  from your computer
                </p>
              </div>
              <input type="file" class="hidden" />
            </label>
          </div>
        </div>

        <p class="text-sm text-gray-300">
          <span>File type: pdf</span>
        </p>
        <div>
          <button
            type="submit"
            class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Upload
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const selected = ref(people[3]);
</script>

<style lang="scss" scoped></style>
