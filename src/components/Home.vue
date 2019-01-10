<template>
  <div class="component">
    <div class="row justify-center" id="information">
      <div class="col-xs-12 text-center">
        <img src="../assets/client.png" alt="client" style="max-width: 50%;padding-top:24px;" class="text-center">
      </div>
      <div class="col-xs-12 text-center">
        <h6>Front End Development<br>{{ client }} Web Application</h6>
      </div>
    </div>
    <section id="your-website" class="q-pa-md">
      <h3 class="text-center">Your Website</h3>
      <p>Through our discussions of the specific needs and use cases for the client site, we've developed a plan for the client site focused on an incredibly user-friendly interface that funnels clients through the application process as simply as possible.</p>
      <q-tree :nodes="siteSections" node-key="label" :expanded.sync="siteSectionsExpanded" />
    </section>
    <section id="development-process" class="q-pa-md">
      <h3 class="text-center">Development Process</h3>
      <q-stepper ref="stepper" class="white-bg">
        <!-- Step: -->
        <q-step default title="Plan">
          <h4>Planning</h4>
          <p>The first step we will need to take is to create a detailed list of the requirements you will need. This will include what pages, content, and any other necessary items you will need. These specifications serve as a roadmap for the rest of the web design process.</p>
          <q-btn
            @click="$refs.stepper.next()"
            label="NEXT: Build"
            class="stepper-buttons"
            color="primary"
          />
        </q-step>
        <q-step title="Build">
          <h4>Website Build</h4>
          <p>Once we have a complete understanding of the specifications of your website we will begin building the site to those specs. During this time we will provide you with updates, when available, to give you an idea of where your project is at and if you want to change anything. We will make up to five total changes during this phase. This limit is in place to ensure that we do not sidetrack from the creation of the entire website and therefore miss the timeline that we are trying to reach. </p>
          <q-btn
            @click="$refs.stepper.next()"
            label="NEXT: Integrate"
            class="stepper-buttons"
            color="primary"
          />
        </q-step>
        <q-step title="Integrate">
          <h4>Integration</h4>
          <p>Once we’ve agreed on the final layout and design of your website, our team will proceed with integration with the backend of the website, kicking off phase two. This is when we will need to work closely with the backend team that you have decided to work with. </p>
           <q-btn
            @click="$refs.stepper.next()"
            label="NEXT: Test"
            class="stepper-buttons"
            color="primary"
          />
        </q-step>
        <q-step title="Test">
          <h4>Testing</h4>
          <p>Once our developers have finished their work integrating the front-end with the back-end, they will get to work testing your site’s performance and reliability. We’ll use various industry-standard tools to benchmark your site for loading, responsiveness, and speed, while also ensuring that it works reliably on all web browsers and mobile devices.</p>
           <q-btn
            @click="$refs.stepper.next()"
            label="NEXT: Deploy"
            class="stepper-buttons"
            color="primary"
          />
        </q-step>
        <q-step title="Deploy">
          <h4>Deployment</h4>
          <p>Once we’re sure that your site is ready to be released to the public, we’ll deploy it on your public domain. Then, we’ll shift into a monthly support process that will continue for 12 months. During that period, we’ll create monthly backups of your site, update scripts and plugins to maintain security and reliability, and perform layout and content updates at your request.</p>
        </q-step>
        <!-- <q-stepper-navigation>
          <q-btn
            flat
            @click="$refs.stepper.previous()"
            label="Back"
          />
          <q-btn
            @click="$refs.stepper.next()"
            label="Next"
          />
        </q-stepper-navigation> -->
      </q-stepper>
    </section>
    <section id="project-timeline" class="q-pa-md">
      <h3 class="text-center">Project Timeline</h3>
      <p>The table below represents our projected timeline for your web design project.</p>
      <q-table
        title="Projected Timeline"
        :data="timelineTableData"
        :columns="timelineTableColumns"
        row-key="name"
        hide-bottom
      />
    </section>
    <section id="pricing" class="q-pa-md">
      <h3 class="text-center">Pricing</h3>
      <p>The table below details the costs associated with your web design project.</p>
      <q-table
        title="Projected Timeline"
        :data="costTableData"
        :columns="costTableColumns"
        row-key="name"
        hide-bottom
      />
      <p class="totalCost">TOTAL: ${{ totalCost }}</p>
    </section>
    <section id="project-terms" class="q-pa-md">
      <h3 class="text-center">Project Terms</h3>
      <p>Swan-Tech, LLC will build a website for client according to the description laid out in this proposal. Any additional features, pages, or other changes to project requirements may affect the timeline and costs laid out in the tables above. Invoices will be generated on the dates listed in the pricing table above, and are due within 15 days of receipt by client. Payment may be made by check, wire transfer or credit card. Credit card payments are subject to an additional 2% convenience fee. Payments made past an invoice’s due date are subject to a $25 late fee.</p>
      <p>All works produced as a result of the above described web design project will become the sole intellectual property of client. Swan-Tech, LLC reserves the right to use visual representations of the final product as part of our project portfolio.</p>
    </section>
  </div>
</template>

<style>
#information, #development-process, #pricing {
  background-color: lightgrey;
}
.white-bg {
  background-color: #FFFFFF;
}
.stepper-buttons {
  font-weight: bold;
}
</style>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      client: 'Client',
      hourlyRate: 50,
      siteSectionsExpanded: [ 'Proposed Sections','Primary Landing Page','Client Portal','Administrative Portal' ],
      siteSections: [
      {
        label: 'Proposed Sections',
        disabled: false,
        children: [
          {
            label: 'Primary Landing Page',
            children: [
              { label: 'First page potential customers see' },
              { label: 'Information about the platform' },
              { label: 'Contact Information' }
            ]
          },
          {
            label: 'Client Portal',
            children: [
              { label: 'Allows clients to manage user-specific data' },
              { label: 'Simplest signup process to increase form conversion' },
              { label: 'Guided step-by-step process help' }
            ]
          },
          {
            label: 'Administrative Portal',
            children: [
              { label: 'Allows for team administrative access to all users' },
              { label: 'Will provide ability to correct potential errors with accounts' }
            ]
          }
        ]
      }],
      timelineTableColumns: [
        {
          name: 'phase',
          label: 'Project Phase',
          required: true,
          align: 'left',
          field: 'name'
        },
        {
          name: 'date',
          label: 'Projected Completion Date',
          required: true,
          align: 'right',
          field: 'date'
        }
      ],
      timelineTableData: [
        {
          name: 'Phase 1 - Front-End Website Creation',
          date: 'January 1, 2019'
        },
        {
          name: 'Phase 2 - Integration & Web App Development',
          date: 'February 1, 2019'
        },
        {
          name: 'Phase 3 - Testing & Deployment',
          date: 'March 1, 2019'
        }
      ],
      timeline: [
        {
          name: 'Phase 1',
          description: 'Front-End Buildout, Content, Imaging',
          hours: 80
        },
        {
          name: 'Phase 2',
          description: 'Back-End Integration, API Integration, Database Configuration & Integration',
          hours: 120
        },
        {
          name: 'Phase 3',
          description: 'Full Unit Testing, Database Integrity Testing, Security Testing, Deployment',
          hours: 80
        }
      ],
      costTableColumns: [
        {
          name: 'phase',
          label: 'Project Phase',
          required: true,
          align: 'left',
          field: 'name'
        },
        {
          name: 'cost',
          label: 'Phase Cost',
          required: true,
          align: 'right',
          field: 'cost'
        }
      ],
      costTableData: [
        {
          name: 'Phase 1 - Front-End Website Creation',
          cost: 4000
        },
        {
          name: 'Phase 2 - Integration & Web App Development',
          cost: 6000
        },
        {
          name: 'Phase 3 - Testing & Deployment',
          cost: 4000
        }
      ],
      costTable: [
        'Phase 1 - Front-End Website Creation'
      ]
    }
  },
  computed: {
    totalCost: function () {
      var phases = this.costTableData.length
      var cost = 0
      for (var x = 0; x < phases; x++) {
        cost = cost + this.costTableData[x].cost
      }
      return cost
    }
  }
}
</script>
