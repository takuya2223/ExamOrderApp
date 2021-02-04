var app = new Vue({
    el: '#app',
    data() {
        return {
            number: 0,
        }
    },
    async mounted() {
        await this.updateView();

        setInterval(async () => {
            await this.updateView();
        }, 2000);
    },
    methods: {
        async getNumber() {
            const result = await axios.get('https://script.google.com/macros/s/AKfycbzrBlmt8zRDJfNf7xaZmCNJhEzAi_jnGUxsOUnBaMSETv1hqi_yhMYm/exec');
            return result.data.number;
        },
        async updateView() {
            const result = await this.getNumber();
            this.number = result;
        },
        async updateViewManually() {
            try {
                await this.updateView();
                setTimeout(() => {
                    alert('更新しました。');
                }, 500);
            } catch(e) {
                alert('更新に失敗しました。');
            }
        },
    }
});