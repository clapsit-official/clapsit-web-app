<script lang="ts">
import colors from "~/constants/colorUtilities";
export default defineComponent({
  name: "UserAccount",
  setup() {
    return {
      user: useUser(),
      store: useGetstarted(),
    };
  },
  computed: {
    getUserDetails() {
      return this.user.getUserDetails;
    },
    colorUtilities() {
      const colorMode = useColorMode().value;
      return colors(colorMode);
    },
  },
  methods: {
    logout() {
      useModal().deprive("user_account");
      setTimeout(() => {
        useModal().provide("logout");
      }, 100);
    },
  },
});
</script>
<template>
  <div id="user_account-component">
    <section class="user_account-field">
      <strong class="header flex-row-center">
        <div class="icon-area">
          <icon-component icon-name="person" fill/>
        </div>
         <Text locale="pages.register.utilities.fullname_field"/>: 
      </strong>
      <div class="content">
        <span>
          {{ getUserDetails.fullname }}
        </span>
      </div>
    </section>

    <section class="user_account-field">
      <strong class="header flex-row-center" style="gap: 5px"> 
        <div class="icon-area">
          <icon-component icon-name="alternate_email" icon-size="20px" fill/>
        </div>
        <Text locale="pages.register.utilities.email_field"/>: 
      </strong>
      <div class="content">
        <span>
          {{ getUserDetails.email }}
        </span>
      </div>
    </section>

    <br />
    <button class="danger flex-row-center" style="gap: 5px" @click="logout">
      <div>
        <icon-component
          icon-name="logout"
          icon-size="18px"
          :color="colorUtilities.$whiteColor"
        />
      </div>
      <Text locale="buttons.logout" />
    </button>
  </div>
</template>
<style lang="scss" scoped>
#user_account-component {
  section.user_account-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid colors.$dividerColor;
    .content {
      padding: 1rem 0;
      textarea {
        border: none;
      }
    }
  }
}
.desktop-app-container {
  #user_account-component {
    min-width: 25rem;
  }
}

.tablet-app-container {
  #user_account-component {
    width: 50vw;
  }
}

.mobile-app-container {
  #user_account-component {
    width: 70vw;
  }
}
</style>
