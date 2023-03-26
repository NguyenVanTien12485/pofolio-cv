<script lang="ts" setup>
const listSkillWork = ref([
    {
        id: 1,
        title: 'Phân tích yêu cầu'
    },
    {
        id: 2,
        title: 'Giải quyết vấn đề'
    },
    {
        id: 3,
        title: 'Quản lý thời gian'
    },
    {
        id: 4,
        title: 'Làm việc nhóm'
    },
    {
        id: 5,
        title: 'Tư duy phản biện'
    },
    {
        id: 6,
        title: 'Thiết kế lấy người dùng làm trung tâm'
    },
    {
        id: 7,
        title: 'Xây dựng, quản lý hệ thống thiết kế'
    },
    {
        id: 8,
        title: 'Research'
    },
    {
        id: 9,
        title: 'Quản lý thời gian'
    },
])

const experianceWork = ref([
    {
        id: 1,
        company: 'OKXE VIỆT NAM',
        jobTitle: 'UI UX Designer',
        timeLine: '4/2020 - Hiện tại',
        description: [
            'Xây dựng lại và quản lý hệ thống thiết kế cho các sản phẩm của Okxe (App/Admin/Web for Seller)',
            'Làm việc với Product Owner để phân tích yêu cầu, xây dựng wireframe tính năng để đáp ứng, hoàn thiện thiết kế',
            'Dựng prototype luồng hoạt động của tính năng để trình bày trước stackholder'
        ]
    },
    {
        id: 2,
        company: 'TWOGAP STARTUP BLOCKCHAIN',
        jobTitle: 'UI Designer',
        timeLine: '01/2019 - 12/2019',
        description: [
            'Tham gia xây dựng ví lạnh Twogap với các chức năng: nhận gửi token, swap token',
            'Phối hợp cùng BA để xây dựng các tính năng cho website: tặng thưởng token, eKYC, referral campaign'
        ]
    },
    {
        id: 3,
        company: 'TWOGAP STARTUP BLOCKCHAIN',
        jobTitle: 'Graphic Designer',
        timeLine: '05/2018 - 12/2018',
        description: [
            'Thiết kế hình ảnh cho các hoạt động truyền thông'
        ]
    },
])

const partTimeWork = ref([
    {
        id: 1,
        company: 'HPH App - Bất động sản',
        description: [
            'Thiết kế App bất động sản cơ bản với các chức năng, đăng bài, liệt kê tin bài, các dự án trên địa bàn thành phố Hải Phòng',
        ]
    },
    {
        id: 2,
        company: 'TEDY MALL - Dropshiping',
        description: [
            'Chăm sóc chất lượng ảnh sản phẩm'
        ]
    },
])
</script>
<template>
    <section id="resume" class="w-full">
        <!-- 1 -->
        <div class="border-b border-solid border-[#CCCCCC]">
            <div class="max-w-[1520px] mx-auto p-[40px] border-x border-solid border-[#CCCCCC] grid grid-cols-3 ">
                <div class="text-[#171B1C]">
                    <div class="title-head inline-block relative font-light text-[14px]">
                        bản thân
                    </div>
                    <div class="font-bold text-xl mb-1 mt-3">
                        Lê Văn Bình
                    </div>
                    <div class="font-bold text-xl">
                        16/11/1995
                    </div>
                </div>
    
                <div class="text-[#171B1C]">
                    <div class="title-head inline-block relative font-light text-[14px]">
                        học tập
                    </div>
                    <div class="font-bold text-xl mb-1 mt-3">
                        FPT Arena HCM
                    </div>
                    <div class="font-bold text-xl">
                        UX/UI Trainer
                    </div>
                </div>
    
                <div class="text-[#171B1C]">
                    <div class="title-head inline-block relative font-light text-[14px]">
                        có thể làm việc tại
                    </div>
                    <div class="font-bold text-xl mb-1 mt-3">
                        TP. Hồ Chí Minh, Đà Nẵng, Huế
                    </div>
                </div>
            </div>
        </div>

        <!-- 2 -->
        <div class="border-b border-solid border-[#CCCCCC]">
            <div class="max-w-[1520px] mx-auto p-[40px] border-x border-solid border-[#CCCCCC] text-[#171B1C]">
                <div class="title-head inline-block relative font-light text-[14px]">
                    Kỹ năng cho công việc
                </div>
                <div class="max-w-[1042px] mt-3">
                    <span v-for="list in listSkillWork" :key="list.id"
                        class="inline-block font-medium text-sm mr-3 mb-3 px-3 py-[6px] rounded-2xl border-solid border-[1px] border-[#D6D9DB] bg-[#F7F7F7]">
                        {{ list.title }}
                    </span>
                </div>
            </div>
        </div>

        <!-- 3 -->
        <div class="border-b border-solid border-[#CCCCCC]">
            <div
                class="max-w-[1520px] mx-auto p-[40px] border-x border-solid border-[#CCCCCC] text-[#171B1C] grid grid-cols-3 gap-20">
                <div class="col-span-2">
                    <div class="title-head inline-block relative font-light text-[14px] mb-2">
                        Kinh nghiệm làm việc
                    </div>
    
                    <div v-for="work in experianceWork" :key="work.id" class="mt-6">
                        <!-- header group -->
                        <div class="grid grid-cols-2 pb-3 border-b border-dashed border-[#CCCCCC] mb-6">
                            <!-- company -->
                            <div class="font-bold text-xl">
                                {{ work.company }}
                            </div>
    
                            <div class="flex justify-between">
                                <!-- Job title -->
                                <span>
                                    {{ work.jobTitle }}
                                </span>
    
                                <!-- time -->
                                <span>
                                    {{ work.timeLine }}
                                </span>
                            </div>
    
                        </div>
    
                        <!-- content -->
                        <ul class="list-disc pl-4">
                            <li v-for="item, index in work.description" :key="index" class="font-normal text-[15px] mt-3">{{
                                item }}</li>
                        </ul>
                    </div>
                </div>
    
                <div>
                    <div class="title-head inline-block relative font-light text-[14px]">
                        part-time
                    </div>
    
                    <div v-for="work in partTimeWork" :key="work.id" class="mt-6">
                        <!-- header group -->
                        <div class="pb-3 border-b border-dashed border-[#CCCCCC] mb-6">
                            <div class="font-bold text-xl">
                                {{ work.company }}
                            </div>
                        </div>
    
                        <!-- content -->
                        <ul class="list-disc pl-4">
                            <li v-for="item, index in work.description" :key="index" class="font-normal text-[15px] mt-3">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
    
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.title-head::after {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    width: 50%;
    height: 1px;
    background: #CCCCCC;
}
</style>