<script setup>
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import Section from '@/components/Section.vue'
import WorkList from '@/components/WorkList.vue'
import ProfileBar from '@/components/ProfileBar.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import Certificate from '@/components/Certificate.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow } from 'swiper/modules'
import { ArrowUpRight } from 'lucide-vue-next'

const projects = [
    {
        id: 1,
        urlProject: '#',
        imgPath: '/src/assets/images/balancheckapp.png',
        title: 'Balance Check Dashboard',
        description:
            'The Balance Check application is designed to monitor and track the balance at each Jasamarga toll road section and gate. This tool provides real-time visibility into the financial status of each segment, allowing users to easily verify and manage toll balances across multiple gates. By centralizing balance data, the application helps ensure accuracy and efficiency in toll collection, facilitating better financial oversight and decision-making for toll road operations.',
        createdYear: '2025',
        stacks: [
            { id: 1, url: '/src/assets/images/laravel.svg' },
            { id: 2, url: '/src/assets/images/livewire.svg' },
            { id: 3, url: '/src/assets/images/tailwindcss.svg' },
            { id: 4, url: '/src/assets/images/mysql.svg' },
        ],
    },
    {
        id: 2,
        urlProject: '#',
        imgPath: '/src/assets/images/datawarehouse.png',
        title: 'Data Warehouse Mediasi Dashboard',
        description:
            'The Data Warehouse Dashboard application is designed to aggregate and visualize data from various databases across different areas. This tool enables users to monitor real-time data from multiple gates along each Jasamarga tollroad  section, with customizable filters to analyze specific datasets. By leveraging centralized data from multiple sources, the dashboard provides a comprehensive view of key performance indicators, ensuring efficient monitoring and decision-making processes. The application enhances visibility into the performance of each gate and segment, supporting operational efficiency and strategic planning.',
        createdYear: '2025',
        stacks: [
            { id: 1, url: '/src/assets/images/laravel.svg' },
            { id: 2, url: '/src/assets/images/tailwindcss.svg' },
            { id: 3, url: '/src/assets/images/mysql.svg' },
        ],
    },
    {
        id: 3,
        urlProject: '#',
        imgPath: '/src/assets/images/servicedatawarehouse.jpg',
        title: 'Service Data Warehouse',
        description:
            'The Data Warehouse service is designed to extract data from the integrator and store it into the data warehouse. This service operates at each toll gate and section of the Jasamarga toll roads, ensuring seamless data transfer and centralized storage. By automating data collection and storage, the service enhances operational efficiency, providing accurate and real-time data for analysis and decision-making across the toll road network.',
        createdYear: '2024',
        stacks: [
            { id: 1, url: '/src/assets/images/python.svg' },
            { id: 2, url: '/src/assets/images/docker.svg' },
            { id: 3, url: '/src/assets/images/mysql.svg' },
            { id: 4, url: '/src/assets/images/postgresql.svg' },
        ],
    },
    {
        id: 4,
        urlProject: '#',
        imgPath: '/src/assets/images/mpe.png',
        title: 'mitra pratama enginereeng dashboard',
        description:
            'Mitra Pratama Engineering Dashboard is an internal management system designed to handle inventory, stock tracking, and expenditure records. It also supports structured document submissions, helping to improve operational efficiency and transparency within the company.',
        createdYear: '2023',
        stacks: [
            { id: 1, url: '/src/assets/images/laravel.svg' },
            { id: 2, url: '/src/assets/images/mysql.svg' },
            { id: 3, url: '/src/assets/images/bootstrap.svg' },
        ],
    },
]

const certificates = [
    {
        id: 1,
        title: 'Dicoding',
        imgPath: '/src/assets/images/dicoding.png',
        date: 'Mar 2024',
        description: 'Belajar Back-End Pemula dengan JavaScript.',
    },
    {
        id: 2,
        title: 'Udemy',
        imgPath: '/src/assets/images/udemy.svg',
        date: 'Jul 2023',
        description: 'Master Laravel 12 and Vue 3 - Build SPA Application',
    },
    {
        id: 3,
        title: 'Udemy',
        imgPath: '/src/assets/images/udemy.svg',
        date: 'Feb 2023',
        description: 'The Ultimate React Course 2025: React, NextJs, Redux & More',
    },
]
</script>

<template>
    <ProfileBar v-motion-slide-visible-once-right />

    <Section title="about" v-motion-slide-bottom>
        <template v-slot:description>
            A Fullstack Web Developer specializing in PHP with the Laravel framework. Skilled in
            both backend and frontend development, I build clean, efficient, and user-focused web
            solutions. Passionate about technology, I continuously explore new tools to deliver
            impactful digital experiences.
        </template>
    </Section>

    <Section title="work experiences">
        <WorkList
            v-motion-slide-visible-right
            target="https://jmto.co.id/"
            role="fullstack web developer"
            at="jasamarga tollroad operator"
            rangeYear="2024 - present"
            :stacks="['laravel', 'codeigniter', 'python', 'tailwindcss']"
        >
            <template v-slot:description>
                As an IT Consultant and Fullstack Web Developer at Jasamarga Tollroad Operator, I am
                responsible for designing, developing, and maintaining internal web-based
                applications that support operational and business processes. I collaborate closely
                with cross-functional teams to analyze requirements and deliver tailored digital
                solutions that improve efficiency, data accuracy, and decision-making. My role
                covers the full development lifecycle, from system architecture and backend
                development using PHP (Laravel) to creating responsive and user-friendly frontends.
                I ensure seamless integration between systems, implement API connections, and
                maintain high standards of performance, security, and scalability across
                applications. I also contribute to the modernization of legacy systems, transforming
                manual workflows into automated digital platforms. With a strong emphasis on clean
                code and maintainability, I provide technical recommendations and act as a bridge
                between business units and technical execution. Working within a dynamic
                infrastructure, I actively support digital transformation initiatives that align
                with Jasamarga’s strategic goals in toll road operations and intelligent
                transportation systems.
            </template>
        </WorkList>
        <WorkList
            v-motion-slide-visible-left
            target="https://galuhmas.co.id/"
            role="fullstack web developer"
            at="PT galuh citarum"
            rangeYear="2023 - 2024"
            :stacks="['laravel', 'codeigniter', 'vue.JS', 'tailwindcss']"
        >
            <template v-slot:description>
                I am responsible for developing and maintaining internal web applications using
                technologies such as Laravel, CodeIgniter, Vue.js, and Tailwind CSS, with a focus on
                creating efficient solutions that provide an intuitive user experience. I also
                contribute to optimizing application performance by improving code and database
                efficiency, while providing clear technical documentation to support ongoing
                development. Additionally, I collaborate with other technical teams to ensure the
                application remains secure, reliable, and scalable.
            </template>
        </WorkList>
        <WorkList
            v-motion-slide-visible-right
            target="https://ubpkarawang.ac.id/"
            :isInternship="true"
            role="junior web developer"
            at="Buana Perjuangan Karawang University"
            rangeYear="2020 - 2021"
            :stacks="['laravel', 'bootstrap', 'tailwindcss']"
        >
            <template v-slot:description>
                Responsible for developing and supporting the development of internal web
                applications using technologies such as Bootstrap, Laravel, and Tailwind CSS. The
                main focus was on designing responsive and user-friendly interfaces, ensuring the
                applications function efficiently. Involved in the implementation and maintenance of
                application features, performing tests to ensure optimal application quality, and
                contributing to performance improvements through code optimization and interface
                enhancements. This experience enriched technical skills in web application
                development and provided a deeper understanding of the development process in an
                academic context.
            </template>
        </WorkList>
    </Section>

    <Section title="projects">
        <div class="-mx-[22px] my-10 sm:-mx-[59px] sm:mt-14" v-motion-fade-visible>
            <swiper
                :modules="[EffectCoverflow]"
                effect="coverflow"
                :grab-cursor="true"
                :centered-slides="true"
                :initial-slide="1"
                :loop="true"
                :coverflow-effect="{
                    rotate: 0,
                    depth: 200,
                    slideShadows: false,
                }"
                :slides-per-view="1.5"
                :space-between="50"
                :breakpoints="{
                    '640': {
                        spaceBetween: 95,
                    },
                }"
            >
                <swiper-slide v-for="project in projects" :key="project.id">
                    <ProjectCard
                        :title="project.title"
                        :imgPath="project.imgPath"
                        :createdYear="project.createdYear"
                        :description="project.description"
                        :stacks="project.stacks"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </Section>

    <!-- Certificates section -->

    <Section title="Certificates" v-motion-slide-visible-right>
        <Certificate
            v-for="certificate in certificates"
            :key="certificate.id"
            :imgPath="certificate.imgPath"
            :title="certificate.title"
            :date="certificate.date"
        >
            <template #description>
                {{ certificate.description }}
            </template>
        </Certificate>
    </Section>

    <Section title="Education" v-motion-slide-visible-left>
        <div class="my-10 sm:my-14">
            <img
                src="/src/assets/images/ubp.png"
                alt="certificates logo"
                class="size-8 bg-cover sm:size-12"
            />

            <div class="mt-3 space-y-1 sm:mt-8 sm:space-y-3">
                <span class="block text-[12px] text-black/70 sm:text-[18px]">2018 - 2022</span>
                <a
                    href="https://ubpkarawang.ac.id/"
                    class="group inline-flex items-center gap-5 text-[12px] capitalize hover:underline sm:text-[18px]"
                >
                    Buana Perjuangan Karawang University
                    <ArrowUpRight
                        :size="14"
                        class="hidden font-semibold group-hover:inline-block"
                    />
                </a>

                <footer class="text-[12px] sm:text-[18px]">
                    <span class="text-black/70">Bachelor’s Degree • Informatics Engineering</span>
                    <span class="text-black/70">Karawang, Jawa Barat. Indonesia</span>
                </footer>
            </div>
        </div>
    </Section>
</template>
