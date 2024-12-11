# Resultado 5 ⭐
def decode_filename(filename: str) -> str:
    f = filename.index('_') 
    t = filename.rfind('.')
    
    return filename[f+1:t]