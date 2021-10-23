<template>
    <dev class="container">
        <dev class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <div class="form-group row border-bottom">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input
                            type="text"
                            class="col-sm-9 form-control-plaintext"
                            readonly
                            id="id"
                            v-bind:value="taskId"
                        />
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input
                            type="text"
                            class="col-sm-9 form-control-plaintext"
                            readonly
                            id="title"
                            value="title1"
                        />
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="content" class="col-sm-3 col-form-label">Content</label>
                        <input
                            type="text"
                            class="col-sm-9 form-control-plaintext"
                            readonly
                            id="content"
                            value="content1"
                        />
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">PersonInCharge</label>
                        <input
                            type="text"
                            class="col-sm-9 form-control-plaintext"
                            readonly
                            id="person-in-charge"
                            value="Ichiro"
                        />
                    </div>
                </form>
            </div>
        </dev>
    </dev>
</template>

<script>
export default {
    props: {
        taskId: Number,
    },
};
</script>
