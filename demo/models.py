from django.db import models


class Musician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    instrument = models.CharField(max_length=100)
    def __str__(self):
        return str(self.first_name + self.last_name)


class Album(models.Model):
    artist = models.ForeignKey(Musician, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    release_date = models.DateField()
    num_stars = models.IntegerField()
    image = models.ImageField(upload_to="media/", default=None)
    def __str__(self):
        return str(self.name)
    
class Genero(models.Model):
    id_genero  = models.AutoField(db_column='idGenero', primary_key=True) 
    genero     = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
        return str(self.genero)    
    
class Postulante(models.Model):
    rut              = models.CharField(primary_key=True, max_length=10)
    nombre           = models.CharField(max_length=20)
    apellido_paterno = models.CharField(max_length=20)
    apellido_materno = models.CharField(max_length=20)
    fecha_nacimiento = models.DateField(blank=False, null=False) 
    id_genero        = models.ForeignKey('Genero',on_delete=models.CASCADE, db_column='idGenero')  
    telefono         = models.CharField(max_length=45)
    email            = models.EmailField(unique=True, max_length=100, blank=True, null=True)
    direccion        = models.CharField(max_length=50, blank=True, null=True)  
    activo           = models.IntegerField()

    def __str__(self):
        return str(self.nombre)+" "+str(self.apellido_paterno)       
        