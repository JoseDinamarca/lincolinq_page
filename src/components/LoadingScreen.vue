<template>
  <div class="loading-screen">
    <div class="spinner"></div>
  </div>
</template>

<style>
.loading-screen {
  position: absolute;
  top: 1;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 9999;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #cccccc;
  border-top-color: #1c89ff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
