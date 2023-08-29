import axios from 'axios'
import { ref } from 'vue'
import { useStoreLoading } from './store/loading'
import { useStoreModal } from './store/modal'

export default () => {
    const storeLoading = useStoreLoading()
    const storeModal = useStoreModal()
    let targetFile: File | null = null

    const selectedFilename = ref('')
    const buttonDisabled = ref(true)
    const isDragging = ref(false)

    const dragging = (n: number) => {
        if (n === 1) {
            isDragging.value = true
        } else {
            isDragging.value = false
        }
    }

    const fileSelected = (event: Event) => {
        const target = event.target as HTMLInputElement
        const files: FileList | null = target.files
        if (files && files.length > 0) {
            targetFile = files[0]
            selectedFilename.value = files[0].name
            buttonDisabled.value = false
        }
    }

    const fileDropped = (event: DragEvent) => {
        isDragging.value = false
        if (event.dataTransfer) {
            const files: FileList = event.dataTransfer.files
            if (files.length > 0) {
                targetFile = files[0]
                selectedFilename.value = files[0].name
                buttonDisabled.value = false
            }
        }
    }

    const fileUpload = () => {
        if (targetFile) {
            storeLoading.openLoading()
            const formData = new FormData()
            formData.append('uploadFile', targetFile)        
            axios
                .post('/api/ingen/upload', formData, {
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                .then((response) => {
                    if (response.data.success) {
                        storeModal.openModal(true, '成功', response.data.message)
                    } else {
                        storeModal.openModal(false, '失敗', response.data.message)
                    }
                    targetFile = null
                    selectedFilename.value = ''
                    buttonDisabled.value = true
                    storeLoading.closeLoading()
                })
                .catch((error) => {
                    storeModal.openModal(false, '失敗', error)
                    targetFile = null
                    selectedFilename.value = ''
                    buttonDisabled.value = true
                    storeLoading.closeLoading()
                })
        } else {
            storeModal.openModal(false, '失敗', 'ファイルを添付してください')
        }
    }

    return {
        selectedFilename,
        buttonDisabled,
        isDragging,
        dragging,
        fileSelected,
        fileDropped,
        fileUpload,
    }
}