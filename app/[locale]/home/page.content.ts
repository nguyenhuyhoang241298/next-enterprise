import { t, type Dictionary } from 'intlayer'

const pageContent = {
  key: 'page',
  content: {
    getStarted: {
      main: t({
        en: 'Get started by editing',
        vi: 'Bắt đầu bằng cách chỉnh sửa',
      }),
    },
    client: {
      main: t({
        en: 'This is a client component',
        vi: 'Đây là một thành phần phía khách hàng',
      }),
    },
    server: {
      main: t({
        en: 'This is a server component',
        vi: 'Đây là một thành phần phía máy chủ',
      }),
    },
  },
} satisfies Dictionary

export default pageContent
