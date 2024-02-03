<!-- components/Watermark.vue -->

<template>
	<canvas class="watermark" canvas-id="watermark"></canvas>
</template>

<script>
	export default {
		mounted() {
			this.drawWatermark();
		},
		methods: {
			drawWatermark() {
				const ctx = uni.createCanvasContext('watermark', this);
				const text = 'Your Watermark';

				// 设置水印样式
				ctx.setFontSize(16);
				ctx.setFillStyle('rgba(0, 0, 0, 0.1)'); // 设置水印颜色和透明度

				// 计算页面宽度和高度
				const pageWidth = uni.upx2px(750); // 这里假设页面宽度为750rpx，需要根据实际情况调整
				const pageHeight = uni.upx2px(1334); // 这里假设页面高度为1334rpx，需要根据实际情况调整

				// 计算水印宽度和高度
				const watermarkWidth = ctx.measureText(text).width;
				const watermarkHeight = 16; // 水印高度可以根据实际情况调整

				// 计算水印行数和列数
				const rows = Math.ceil(pageHeight / (watermarkHeight * 2)); // 减少密度
				const cols = Math.ceil(pageWidth / watermarkWidth);

				// 绘制水印
				for (let i = 0; i < rows; i++) {
					for (let j = 0; j < cols; j++) {
						// 设置旋转角度
						ctx.rotate(-45 * Math.PI / 180);

						// 绘制水印文字
						ctx.fillText(text, j * watermarkWidth * 2, i * watermarkHeight * 2);

						// 重置旋转角度
						ctx.rotate(45 * Math.PI / 180);
					}
				}

				// 结束绘制
				ctx.draw(true);
			},
		},
	};
</script>

<style>
	.watermark {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		/* 防止水印干扰页面交互 */
		z-index: 9999;
		/* 确保水印位于最顶层 */
	}
</style>