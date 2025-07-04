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
    methods: {
        closeModal(){
            useModal().deprive('user_account');
        }
    }
})
</script>
<template>
    <div id="user_account-component"> 
        <section class="user_account-field">
            <strong class="header">
                Fullname:
            </strong>
            <div  class="content">
                    <span>
                        {{ getUserDetails.fullname }}
                    </span>
            </div>
        </section>
        
        <section class="user_account-field">
            <strong class="header">
                Email:
            </strong>
            <div  class="content">
                    <span>
                        {{ getUserDetails.email }}
                    </span>
            </div>
        </section>

        <br>
        <button class="white" @click="closeModal">
            <Text locale="buttons.ok"/>
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
    #user_account-component{
        min-width: 25rem;
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