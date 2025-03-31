<script lang="ts">
export default defineComponent({
    name: "UserAccount",
    setup() {
        return {
            user: useUser(),
            store: useGetstarted(),
        }
    },
    computed: {
        getUserDetails() {
            return this.user.getUserDetails;
        }
    },
})
</script>
<template>
    <div id="user_account-component"> 
        <section class="user_account-field">
            <strong class="header">
                Fullname:
            </strong>
            <div  class="content">
                <custom-input 
                    type="text"
                    v-model="getUserDetails.fullname" 
                    placeholder="John Doe"
                    autocomplete="name" 
                    name="fullname" 
                    :maxlength="255" 
                    required />
            </div>
        </section>
        
        <section class="user_account-field">
            <strong class="header">
                Email:
            </strong>
            <div  class="content">
                <custom-input
                    v-model="getUserDetails.email" 
                    type="email"
                    placeholder="example@email.com" 
                    autocomplete="email"
                    name="email" 
                    :maxlength="255" 
                    required />
            </div>
        </section>

        <section class="user_account-field">
        <strong class="header">
                Phone:
            </strong>
            <div  class="content">
                <custom-input
                    v-model="getUserDetails.phone" 
                    type="tel"
                    placeholder="+0 123 456 789" 
                    autocomplete="tel"
                    name="phone" 
                    :maxlength="255" 
                    required />
            </div>
        </section>

        <section class="user_account-field">
            <strong class="header">
                Birthday:
            </strong>
            <div  class="content">
                <custom-input
                    v-model="getUserDetails.birthday" 
                    type="date"
                    placeholder="+0 123 456 789" 
                    autocomplete="bday"
                    name="birthday" 
                    :maxlength="255" 
                    required />
            </div>
        </section>
        <br>
        <button class="black">
            <Text locale="buttons.save"/>
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
            :deep(.input-area__center) {
                border: none;
                background-color: transparent;
                box-shadow: none !important;
                input {
                    text-align: right;
                    width: 100%;
                }
            }
            textarea {
                border: none;

            }
        }   
    }
}
.desktop-app-container {
    #user_account-component{
        width: 35rem;
    }
}

.tablet-app-container {
    #user_account-component{
        width: 50vw;
    }
}

.mobile-app-container {
    #user_account-component{
        width: 70vw;
    }
}
</style>