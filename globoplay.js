################ serviço online ############

import m3u8

playlist = m3u8.load ('http://videoserver.com/playlist.m3u8')  # this could also be an absolute filename
print (playlist.segments)
print (playlist.target_duration)

# carregando conteudo 🎫

playlist = m3u8.loads ('#EXTM3U8 ... etc ... ')

import m3u8

playlist = m3u8.load('http://videoserver.com/playlist.m3u8')
print(playlist.dumps())

# ⚙️

playlist.dump('playlist.m3u8')






































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































#EXTINF:-1 tvg-id="tvglobo" group-title="Status do serviço" tvg-name="Status do serviço: 🟢" tvg-logo="https://pbs.twimg.com/profile_images/1851702580046426112/Qpt7Twoy_200x200.jpg",host
pfsv.io/couto14/211219tv/168251.m3u8
