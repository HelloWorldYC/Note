(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{719:function(r,e,t){"use strict";t.r(e);var o=t(18),n=Object(o.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"pycharm项目中出现的问题及解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pycharm项目中出现的问题及解决方法"}},[r._v("#")]),r._v(" pycharm项目中出现的问题及解决方法")]),r._v(" "),t("p",[r._v("1、"),t("code",[r._v("no such file or directory")]),t("br"),r._v("\n这是因为文件路径有问题，要检查一下文件的路径，相对路径的时候要查看一下当前的工作路径")]),r._v(" "),t("p",[r._v("2、"),t("code",[r._v("AssertionError:")]),t("br"),r._v("\n文件的执行要带参数，在 Edit configeration 里面将 parameters 填上参数，可查看 README 获取相关信息")]),r._v(" "),t("p",[r._v("3、"),t("code",[r._v("AssertionError: Torch not compiled with CUDA enabled")]),t("br"),r._v("\n原因：没有安装 cuda 或 cuda 版本不对"),t("br"),r._v("\n解决方法：先查看自己电脑的显卡 GPU 支持什么类型的 cuda（在 NVDIA 设置里面可以查看），再上 "),t("a",{attrs:{href:"https://developer.nvidia.com/cuda-toolkit-archive",target:"_blank",rel:"noopener noreferrer"}},[r._v("cuda 官网"),t("OutboundLink")],1),r._v("下载对应的 cuda 版本，下载完之后打开 cmd 输入"),t("code",[r._v("nvcc --version")]),r._v("查看 cuda 是否下载成功，下载成功之后再下载相对应的 "),t("a",{attrs:{href:"https://developer.nvidia.com/zh-cn/cudnn",target:"_blank",rel:"noopener noreferrer"}},[r._v("cudnn"),t("OutboundLink")],1),r._v(" 版本，将下载后的压缩包解压，将里面的文件放到 cuda 文件中相对应的文件夹下，最后再下载 "),t("a",{attrs:{href:"https://pytorch.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("pytorch"),t("OutboundLink")],1),r._v("，查看 cuda 对应的 pytorch 版本，以及用 pip 下载 pytorch 的命令，然后在 cmd 中用 pip 下载 pytorch ，下载完成后在 cmd 中依次输入"),t("code",[r._v("python、 import torch、 torch.cuda.is_available")]),r._v("命令，若结果出现"),t("code",[r._v("function is_available at 0x000001DD4B99CBF8")]),r._v("，则成功；或者在 cmd 进入 python ，先输入"),t("code",[r._v("import cuda")]),r._v("，再输入"),t("code",[r._v("print(torch.cuda.is_available())")]),r._v("打印是否有 cuda 可用，或者输入 "),t("code",[r._v("print(torch.verision.cuda)")]),r._v("打印 cuda 的版本。")]),r._v(" "),t("p",[r._v("4、"),t("code",[r._v("RuntimeError: view size is not compatible with input tensor‘s size and stride")]),t("br"),r._v("\n原因：用多卡训练的时候 tensor 不连续，即 tensor 分布在不同的内存或显存中。"),t("br"),r._v("\n解决方法：对 tensor 进行操作时先调用"),t("code",[r._v("contiguous()")]),r._v("。如"),t("code",[r._v("tensor.contiguous().view()")]),r._v(" 或者"),t("code",[r._v("out = out.contiguous().view(out.size()[0], -1)")]),r._v("。")])])}),[],!1,null,null,null);e.default=n.exports}}]);