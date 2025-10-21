<script setup>
name: 'CardItem'
</script>

<template>
    
    <div class="mx-4 bg-gray-200 border-2 border-gray-100 rounded-lg p-4 mb-4">
        <div class="flex justify-between items-center border-b-2 border-gray-100">
            <h2 class=" font-semibold ">DH023</h2>
            <div class="time flex items-center gap-2 text-sm text-gray-700">
                <p class="">6/10/20252</p>
                <span>|</span>
                <p>12:00</p>
            </div>
        </div>

        <div>
            <p>Sản phẩm</p>
            <div class="item flex gap-2">
                <img src="@/assets/nuoc_chanh.png" alt="Product Image" class="w-10 h-10 object-cover">
                <div class="info flex justify-between w-full">
                    <div>
                        <h3 class="font-medium">Nước chanh</h3>
                        <p class="text-sm text-gray-600">100000</p>
                    </div>
                    <p>x1</p>
                </div>
            </div>
            <p>Ghi chú</p>

            <div class="flex justify-between items-center">
                <div class="flex gap-2">
                    <div class="hinhthuc border-0 bg-gray-300 rounded-lg p-2">
                        <p class="w-fit">COD</p>
                    </div>
    
                     <div class="thanhtoan border-0 bg-background rounded-lg p-2">
                        <p class="w-fit">Chưa thanh toán</p>
                    </div>
                </div>

                <div class="thanhtien flex gap-2">
                    <p class="text-gray-600">Thành tiền</p>
                    <p>120000</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    p{
        font-size: 0.7rem;
    }
</style>