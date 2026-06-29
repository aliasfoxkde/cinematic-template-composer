// src/data/i18n.ts
// Internationalisation — English, Spanish, Korean, Chinese.

export type I18nKey = 'en' | 'es' | 'ko' | 'zh';

export interface I18nStrings {
  label: string;
  exp: string;
  sending: string;
  waiting: string;
  done: string;
  noimg: string;
  err: string;
  timeout: string;
}

export const I18N: Record<I18nKey, I18nStrings> = {
  en: {
    label: 'EN',
    exp: `Enter your ComfyUI address, pick an orientation and click Send to generate the prompt above.
You need ComfyUI running locally with the Krea 2 model loaded.
If it won't connect, add <span style="color:var(--acc);font-family:monospace;font-weight:700">--enable-cors-header</span> to your .bat file and restart ComfyUI.`,
    sending: 'Sending to ComfyUI...',
    waiting: 'Generating',
    done: 'Done',
    noimg: 'Finished, but no image was returned.',
    err: `Couldn't reach ComfyUI. Make sure it's running and started with --enable-cors-header.`,
    timeout: "Timed out waiting for the image.",
  },
  es: {
    label: 'ES',
    exp: `Introduce la direccion de tu ComfyUI, elige una orientacion y pulsa Send para generar el prompt de arriba.
Necesitas ComfyUI corriendo en local con el modelo Krea 2 cargado.
Si no conecta, anade <span style="color:var(--acc);font-family:monospace;font-weight:700">--enable-cors-header</span> a tu .bat y reinicia ComfyUI.`,
    sending: 'Enviando a ComfyUI...',
    waiting: 'Generando',
    done: 'Listo',
    noimg: 'Termino, pero no devolvio imagen.',
    err: 'No se pudo conectar con ComfyUI. Asegurate de que esta abierto y arrancado con --enable-cors-header.',
    timeout: 'Se agoto el tiempo esperando la imagen.',
  },
  ko: {
    label: '한국',
    exp: `ComfyUI 주소를 입력하고 방향을 선택한 뒤 Send를 누르면 위의 프롬프트로 이미지를 생성합니다.
Krea 2 모델이 로드된 ComfyUI가 로컬에서 실행 중이어야 합니다.
연결되지 않으면 .bat 파일에 <span style="color:var(--acc);font-family:monospace;font-weight:700">--enable-cors-header</span>을 추가하고 ComfyUI를 재시작하세요.`,
    sending: 'ComfyUI로 전송 중...',
    waiting: '생성 중',
    done: '완료',
    noimg: '완료되었지만 이미지가 없습니다.',
    err: 'ComfyUI에 연결할 수 없습니다. 실행 중이며 --enable-cors-header로 시작되었는지 확인하세요.',
    timeout: '이미지 대기 시간이 초과되었습니다.',
  },
  zh: {
    label: '中文',
    exp: `输入您的 ComfyUI 地址，选择方向并点击 Send，即可使用上方的提示词生成图像。
需要在本地运行并已加载 Krea 2 模型的 ComfyUI。
如果无法连接，请在 .bat 文件中添加 <span style="color:var(--acc);font-family:monospace;font-weight:700">--enable-cors-header</span> 并重启 ComfyUI。`,
    sending: '正在发送到 ComfyUI...',
    waiting: '生成中',
    done: '完成',
    noimg: '已完成，但未返回图像。',
    err: '无法连接 ComfyUI。请确认它正在运行并使用 --enable-cors-header 启动。',
    timeout: '等待图像超时。',
  },
};
